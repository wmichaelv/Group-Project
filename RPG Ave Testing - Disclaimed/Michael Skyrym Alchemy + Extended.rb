#==============================================================================
#
# Michael Skyrym Alchemy + Extended
# Last Updated: 2014.02.23
# V 1.0
# Requirement: RPG Maker VX Ace
#             -Knowledge of 'how to use script and notetag'
#
#==============================================================================
# Description
#==============================================================================
# This script is to do alchemy like in Skyrym GUI but with more dynamic settings
#
#==============================================================================
# Compatibility
#==============================================================================
# - RPG::BaseItem DataManager are the only overloaded class, so compatibility
#   is pretty high.
#
#==============================================================================
# Installation
#==============================================================================
# - Place anywhere under material section but above main
#
#==============================================================================
# How to Use:
# - Call Scene by using Script Call
# Script: SceneManager.call(Scene_Alchemy)
#
# - use notetag to specify ingredient and product
#   Notetag for ingredient =>   <key>
#                               #add key(s) here
#                               </key>
#
#                       For ex: <key>
#                               Stone
#                               </key>
#                               This item is an inggredient for crafting item(s)
#                               that requires 'stone'.
#
#                       For ex: <key>
#                               Wood
#                               Iron
#                               </key>
#                               This item is an inggredient for crafting item(s)
#                               that requires 'wood'.
#                               This item is an inggredient for crafting item(s)
#                               that requires 'iron'.
#
#
#   Notetag for product    =>   <Ingr>
#                               key: (IV,IA)
#                               </Ingr>
#                               IT = # of Ingredient Variety
#                               IA = # of Ingredient Amount
#                       For ex: <Ingr>
#                               stone: (1,2)
#                               </Ingr>
#                               This item requires 1 variety of 'stone' key
#                               This item requires 2 each of 'stone' key variety
#                       For ex: <Ingr>
#                               stone: (1,2)
#                               wood: (5,12)
#                               </Ingr>
#                               This item requires 1 variety of 'stone' key
#                               This item requires 2 each of 'stone' key variety
#                               This item requires 5 variety of 'wood' key
#                               This item requires 12 each of 'wood' key variety
#
#==============================================================================

#==============================================================================
#  Nickname - If you don't like the names of your 'keys', you can set nicknames
#==============================================================================

Keys_Nickname = {
  "Example_Key" => "Example_Nickname",
  "ASDkeyQWE"   => "ASDNicknameQWE",
  "Dont forget" => "To put comma",
  "Last nick"   => "No need comma"
}

#==============================================================================
# Success Rate
#
# - Edit as you see fit
# - True means the alchemy succeed
# - False means the alchemy hasn't succeed
# - Default is 100% success rate
#
#==============================================================================

class Scene_Alchemy < Scene_MenuBase

  def success_rate
    @give100rate = 100
    @success = nil #Result variable to grab for event(s)

    if @give100rate == 100
      @success = true
      return true
    else
      @success = false
      return false
    end
  end
end

#==============================================================================
#
#  REMINDER REMINDER REMINDER REMINDER REMINDER REMINDER
#  - check spelling before reporting error
#
#
# #=================================== End ===================================#
#
#  Have Fun!
#
#==============================================================================

#==============================================================================
# Bio
#==============================================================================
#
# 2014.02.23 - V 1.00  Script is released and up for bug testing
# 2014.02.23 - V 0.14  Implementing Alchemy Algoritm
# 2014.02.22 - V 0.13  GUI is finished
# 2014.02.10 - V 0.12  Notetag reader is implemented
# 2014.02.09 - V 0.11  Game_Alchemy is made
# 2014.02.08 - V 0.1   Script is initailized
#
#==============================================================================


#==============================================================================
# RPG::BaseItem
#==============================================================================

class RPG::BaseItem

  attr_accessor :cmake, :ingr, :keys, :used

  alias RPG_BaseItem_Initialize initialize
  def initialize; RPG_BaseItem_Initialize; @cmake = false end
  def get_ingr(string)
    @ingr = Hash.new {|h,k| h[k]=[]} if @ingr.nil?
    @refrigerator = Hash.new {|h,k| h[k]=[]} if @refrigerator.nil?
    @ingr[string[/.*?(?=[:])/i]] << 
    string[/(?<=[(]).*?(?=[,])/].to_i << 
    string[/(?<=[,]).*?(?=[)])/].to_i
    @refrigerator[string[/.*?(?=[:])/i]] << 
    string[/(?<=[(]).*?(?=[,])/].to_i << 
    string[/(?<=[,]).*?(?=[)])/].to_i
  end
  def get_keys(string)
    @keys = Array.new if @keys.nil?
    @used = Hash.new if @used.nil?
    @used[string] = false
    @keys << string; end
  def nf(string); @ingr[string][0] != 0 end
  def cF; @ingr.each_key do |k|; return false if nf(k) end; return true end
  def reset_ingr(key); @ingr[key] = @refrigerator[key].dup end
end

#==============================================================================
# DataManager
#==============================================================================

module DataManager
  class << self; alias mcgo create_game_objects end
  def self.create_game_objects; mcgo; $ga = Game_Alchemy.new end
end

#==============================================================================
# Game_Alchemy
#==============================================================================

class Game_Alchemy

  attr_accessor :pr, :keys

  def initialize
    @pr = Array.new
    @keys = Hash.new {|h,k| h[k]=[]}
    $data_items.each do |item| 
      item.note.split(/[\r\n]+/).each do |nt|
        case nt
        when /<(?:ingr?)>/i; @gi = true
        when /<\/(?:ingr?)>/i; @gi = false
        when /<(?:key?)>/i; @gk = true
        when /<\/(?:key?)>/i; @gk = false
        else
          if @gi
            @pr << $data_items[item.id] unless @pr.include?($data_items[item.id]) 
            $data_items[item.id].get_ingr(nt)
          end
          if @gk
            @keys[nt] << $data_items[item.id]; $data_items[item.id].get_keys(nt)
          end
        end if $data_items[item.id].note.match(/<(?:ingr?)>/i) || $data_items[item.id].note.match(/<(?:key?)>/i)
      end unless item.nil? 
    end
    $data_weapons.each do |item| 
      item.note.split(/[\r\n]+/).each do |nt|
        case nt
        when /<(?:ingr?)>/i; @gi = true
        when /<\/(?:ingr?)>/i; @gi = false
        when /<(?:key?)>/i; @gk = true
        when /<\/(?:key?)>/i; @gk = false
        else
          if @gi
            @pr << $data_weapons[item.id] unless @pr.include?($data_weapons[item.id]) 
            $data_weapons[item.id].get_ingr(nt)
          end
          if @gk
            @keys[nt] << $data_weapons[item.id]; $data_weapons[item.id].get_keys(nt)
          end
        end if $data_weapons[item.id].note.match(/<(?:ingr?)>/i) || $data_weapons[item.id].note.match(/<(?:key?)>/i)
      end unless item.nil? 
    end
    $data_armors.each do |item| 
      item.note.split(/[\r\n]+/).each do |nt|
        case nt
        when /<(?:ingr?)>/i; @gi = true
        when /<\/(?:ingr?)>/i; @gi = false
        when /<(?:key?)>/i; @gk = true
        when /<\/(?:key?)>/i; @gk = false
        else
          if @gi
            @pr << $data_armors[item.id] unless @pr.include?($data_armors[item.id]) 
            $data_armors[item.id].get_ingr(nt)
          end
          if @gk
            @keys[nt] << $data_armors[item.id]; $data_armors[item.id].get_keys(nt)
          end
        end if $data_armors[item.id].note.match(/<(?:ingr?)>/i) || $data_armors[item.id].note.match(/<(?:key?)>/i)
      end unless item.nil? 
    end
    @pr.each { |item| checkCanMake?(item) }
  end
  def checkCanMake?(item)
    getPair(item)
    lss = item.ingr.size
    sp = Hash.new
    item.ingr.each_pair { |k, v|
      lsr = v[0]
      @keys[k].each { |t| 
        (@p.include?(t)) ? (sp[t] = 0 if sp[t].nil?; sp[t] += v[1]) : lsr -= 1 if $game_party.item_number(t) >= v[1]
        lsr -= 1 if $game_party.item_number(t) >= sp[t] if sp[t] && lsr > 0
      }; lss -= 1 if lsr <= 0 }
    item.cmake = (lss <= 0); @p = nil
  end
  def getPair(item)
    b = Array.new; @p = Array.new
    item.ingr.each_key { |k| @keys[k].each { |i| (b.include?(i)) ? b << i : @p << i} }
  end

  def rU(i); @pr[i].ingr.each_key { |k| @keys[k].each { |item| item.used[k] = false } } end
  def rR(i); @pr[i].ingr.each_key { |k| @pr[i].reset_ingr(k)} end
end

#==============================================================================
# Scene_Alchemy
#==============================================================================

class Scene_Alchemy < Scene_MenuBase
  def start
    super
    create_help_window; create_product_window
    create_ingredient_window; create_confirm_window
    @help_window.x = 0; @help_window.y = 344
    @help_window.width = 544; @help_window.height = 72
  end
  def create_product_window
    @pw = Window_Product.new(0,0)
    @pw.set_handler(:product,  method(:selectIngredient))
    @pw.set_handler(:cancel,   method(:return_scene))
    @pw.help_window = @help_window
    @pw.activate
  end
  def selectIngredient
    if $ga.pr[@pw.in].cmake
      @pw.deactivate; @iw.activate
      @iw.sl; @sui = Array.new
    else
      cannot_select; @pw.activate
    end
  end
  def create_ingredient_window
    @iw = Window_Ingredient.new(160,0)
    @iw.sh(:ok,     method(:ingredientSelect))
    @iw.sh(:cancel, method(:returnProduct))
    @iw.hw = @help_window
    @pw.iw = @iw
    @iw.deactivate
  end
  def ingredientSelect(i)
    @usedIngr = i
    @sui << i
    @iw.deactivate; @cw.activate
    @cw.show; @cw.open
  end
  def returnProduct
    $ga.rU(@pw.in); $ga.rR(@pw.in)
    @pw.update; @iw.refresh; @iw.sl
    @iw.deactivate; @pw.activate; end
  def create_confirm_window
    @cw = Window_Confirm.new(172, 208)
    @cw.width = 200
    @cw.set_handler(:Confirm,    method(:confirm))
    @cw.set_handler(:Cancel,     method(:cancel))
    @cw.set_handler(:cancel,     method(:cancel))
    @cw.z = 200; @cw.deactivate
    @cw.hide; @cw.close
  end
  def confirm
    @iw.data[@usedIngr].used[@iw.ika[@usedIngr]] = true
    $ga.pr[@pw.in].ingr[@iw.ika[@usedIngr]][0] -= 1
    @cw.deactivate; @cw.hide; @cw.close
    if $ga.pr[@pw.in].cF
      confirm_alchemy
      $ga.rU(@pw.in); $ga.rR(@pw.in)
      @iw.refresh; @pw.activate
    else
      @iw.refresh; @iw.activate; @iw.sl;
    end
  end
  def confirm_alchemy
    @sui.each do |i|
      $game_party.gain_item(@iw.data[i], -$ga.pr[@pw.in].ingr[@iw.ika[i]][1])
    end
    $game_party.gain_item($ga.pr[@pw.in],1) if success_rate
  end
  def cancel
    @iw.activate; @iw.sl; @cw.deactivate; @cw.hide; @cw.close
  end
  def cannot_select
    Sound.play_buzzer; b = Bitmap.new(340,60)
    b.draw_text(0, 20,340, 40, "You don't have enough ingredient.")
    w = Window_Message.new; w.contents = b
    w.width = 380; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(90); b.dispose; w.dispose
  end
end

#==============================================================================
# Window_Product
#==============================================================================

class Window_Product < Window_Command

  attr_accessor :iw #Ingredient Window
  attr_accessor :in #Index Number

  def make_command_list; $ga.pr.each do |i| add_command(i.name, :product) end end
  def window_width; 160 end
  def window_height; 344 end
  def item; $ga.pr && index >= 0 ? $ga.pr[index] : nil end
  def select_last; select($ga.pr.index($game_party.last_item.object) || 0) end
  def draw_item(index)
    rect = item_rect(index)
    rect.x += 4; rect.width -= 8
    icon_index = $ga.pr[index].icon_index
    self.contents.clear_rect(rect)
    if !icon_index.nil?
      rect.x -= 4
      draw_icon(icon_index, rect.x, rect.y, $ga.pr[index].cmake)
      rect.x += 26; rect.width -= 20
    end
    self.contents.clear_rect(rect)
    self.contents.font.color = normal_color
    self.contents.font.color.alpha = $ga.pr[index].cmake ? 255 : 128
    self.contents.draw_text(rect, $ga.pr[index].name)
  end
  def update; super; refresh; @iw.c = $ga.pr[index] if @iw; @in = index end
  def iw=(iw); @iw = iw; update end
  def update_help; @help_window.set_item(item) end
  def refresh; super; checkEnable end
  def checkEnable; $ga.pr.each do |i| $ga.checkCanMake?(i) end end
end

#==============================================================================
# Window_Confirm
#==============================================================================

class Window_Confirm < Window_Command
  def make_command_list; add_command('Confirm', :Confirm); add_command('Cancel',  :Cancel) end
end

#==============================================================================
# Window_Ingredient
#==============================================================================

class Window_Ingredient < Window_Base

  attr_reader   :index, :hw, :data, :ika
  
  def initialize(x, y, width = 384, height = 344)
    super
    @index = -1; @h = {}; self.padding_bottom = 20; deactivate; 
    refresh; select(1); activate; @c = nil; @data = []
  end
  def in; @data.index($game_party.last_item.object) end #index number
  def contents_height; item_max * 24 end
  def active=(active); super; uc; cuh end
  def index=(index); @index = index; @index = 1 if @index == 0; uc; cuh end
  def select(index); self.index = index if index end
  def unselect; self.index = -1 end
  def hw=(hw); @hw = hw; cuh end
  def sl; select(1) end
  def sh(s, method); @h[s] = method end
  def ch(s, i = nil); (i) ? @h[s].call(i) : @h[s].call end
  def cm; active && open? && item_max > 0 end
  def cd(wrap = false)
    ((@data[index + 1].is_a?(String)) ? select((index + 2) % item_max) :
    select((index + 1) % item_max)) if index < item_max - 1 || (wrap)
  end
  def cu(wrap = false)
    ((@data[index - 1].is_a?(String)) ? 
    select((index - 2 + item_max) % item_max) : 
    select((index - 1 + item_max) % item_max)) if (index >= 2 || (wrap) || top_row > 0)
  end
  def cpd
    if top_row + 13 < item_max
      self.top_row += 13
      (@index + 13 > item_max - 1) ? select(item_max - 1) : 
      ((@data[@index + 13].class.is_a?(String)) ?
      (self.top_row += 1; select(@index + 14)) : select(@index + 13))
    end
  end
  def cpu
    if top_row > 0
      self.top_row -= 13
      (@index - 13 < 0) ? select(@data[1]) :
      ((@data[@index - 13].is_a?(String)) ? select(@index - 12) : 
      select(@index - 13))
    end
  end
  def update; super; pcm; ph end
  def pcm
    return unless cm
    li = @index
    cd  (Input.trigger?(:DOWN))  if Input.repeat?(:DOWN)
    cu  (Input.trigger?(:UP))    if Input.repeat?(:UP)
    cpd if Input.trigger?(:R)
    cpu if Input.trigger?(:L)
    Sound.play_cursor if @index != li
  end
  def ph
    return unless open? && active
    return po  if oe && Input.trigger?(:C)
    return pc  if ce && Input.trigger?(:B)
    return ppd if Input.trigger?(:R)
    return ppu if Input.trigger?(:L)
  end
  def ce; true end
  def po
    (cie(@ika[index])) ?
    (Sound.play_ok; Input.update; deactivate; coh(index)) : Sound.play_buzzer
  end
  def pc; Sound.play_cancel; Input.update; deactivate; cch end
  def cch; ch(:cancel) end
  def ppu; Sound.play_cursor; Input.update; deactivate; ch(:pageup) end
  def ppd; Sound.play_cursor; Input.update; deactivate; ch(:pagedown) end
  def uc; (@index < 0) ? cursor_rect.empty : (ecv; cursor_rect.set(item_rect(@index))) end
  def top_row; oy/24 end
  def top_row=(index)
    index = 0 if index < 0
    index = item_max - 1 if index > item_max - 1
    self.oy = index * 24
  end
  def ecv
    self.top_row = index if index < top_row
    self.top_row = index - 12 if index > top_row + 12
    self.top_row = 0 if index == 1
  end
  def cuh; uh if active && @hw end
  def oe; true end
  def coh(i); ch(:ok, i) end
  def c=(p); return if @c == p; @c = p; refresh end
  def item_max; @data ? @data.size : 1 end
  def item; @data && index >= 0 ? @data[index] : nil end
  def cie(ik); enable?(@data[index], ik) end
  def item_rect(i)
    rect = Rect.new; rect.width = 372; rect.height = 24
    rect.x = 0; rect.y = i * 24; rect
  end
  def di
    return if @c.nil?
    @data.size.times { |i| 
      if @data[i].is_a?(String)
        @ik = @data[i]; @ika << @ik
        change_color(text_color(0), @c.nf(@ik)) 
        draw_text(24, i * 24, 350, 24, 
          "#{(Keys_Nickname[@data[i]] ||= @data[i])}" + 
          ": Select " + "(%2d)" % @c.ingr[@data[i]][0]) 
      else; (draw_item(i, @ik); @ika << @ik) end }
  end
  def he(item, ik); $game_party.item_number(item) >= @c.ingr[ik][1] end
  def enable?(item, ik); he(item, ik) && !item.used[ik] && @c.nf(ik) end
  def mil
    return if @c.nil?
    @c.ingr.each_key { |k|
    @data << k; (0...$ga.keys[k].size).each { |i| @data << $ga.keys[k][i] }
    }
  end
  def draw_item(index, ik)
    return if @data.nil?
    item = @data[index]
    if item
      rect = item_rect(index); rect.width -= 4
      draw_item_name(item, rect.x, rect.y, enable?(item, ik))
      din(rect, item); dir(rect, item, ik)
    end
  end
  def din(rect, item)
    draw_text(270, rect.y, 100, 24, "%2d" % $game_party.item_number(item)) end
  def dir(rect, item, ik)
    draw_text(290, rect.y, 120, 24, "(%2d)" % @c.ingr[ik][1]) end
  def uh; @hw.set_item(item) end
  def refresh; @ika = Array.new; @data = []; mil; create_contents; di end
end