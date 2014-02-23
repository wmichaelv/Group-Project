#==============================================================================
#
# Michael Skyrym Alchemy + Extended
# Last Updated: 2014.02.08
# V 0.11
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

  attr_accessor :cmake
  attr_accessor :ingr
  attr_accessor :keys
  attr_accessor :used

  alias RPG_BaseItem_Initialize initialize
  def initialize; RPG_BaseItem_Initialize; @cmake = @used = false end
  def get_ingr(string)
    @ingr = Hash.new {|h,k| h[k]=[]} if @ingr.nil?
    @ingr[string[/.*?(?=[:])/i]] << 
    string[/(?<=[(]).*?(?=[,])/].to_i << 
    string[/(?<=[,]).*?(?=[)])/].to_i
  end
  def get_keys(string); @keys = Array.new if @keys.nil?; @keys << string; end
  def finish(string); @ingr[string][0] == 0 end
  def checkFinish
  end
end

#==============================================================================
# DataManager
#==============================================================================

module DataManager
  class << self; alias michael_create_game_objects create_game_objects end
  def self.create_game_objects
    michael_create_game_objects; $game_alchemy = Game_Alchemy.new end
end

#==============================================================================
# Game_Alchemy
#==============================================================================

class Game_Alchemy

  attr_accessor :product
  attr_accessor :keys

  def initialize
    @product = Array.new
    @keys = Hash.new {|h,k| h[k]=[]}
    $data_items.each do |item| 
      item.note.split(/[\r\n]+/).each do |notetag|
        case notetag
        when /<(?:ingr?)>/i; @get_ingr = true
        when /<\/(?:ingr?)>/i; @get_ingr = false
        when /<(?:key?)>/i; @get_keys = true
        when /<\/(?:key?)>/i; @get_keys = false
        else
          if @get_ingr
            @product << $data_items[item.id] unless @product.include?($data_items[item.id]) 
            $data_items[item.id].get_ingr(notetag)
          end
          if @get_keys
            @keys[notetag] << $data_items[item.id] 
            $data_items[item.id].get_keys(notetag)
          end
        end if $data_items[item.id].note.match(/<(?:ingr?)>/i) || $data_items[item.id].note.match(/<(?:key?)>/i)
      end unless item.nil? 
    end
    $data_weapons.each do |item| 
      item.note.split(/[\r\n]+/).each do |notetag|
        case notetag
        when /<(?:ingr?)>/i; @get_ingr = true
        when /<\/(?:ingr?)>/i; @get_ingr = false
        when /<(?:key?)>/i; @get_keys = true
        when /<\/(?:key?)>/i; @get_keys = false
        else
          if @get_ingr
            @product << $data_weapons[item.id] unless @product.include?($data_weapons[item.id]) 
            $data_weapons[item.id].get_ingr(notetag)
          end
          if @get_keys
            @keys[notetag] << $data_weapons[item.id] 
            $data_weapons[item.id].get_keys(notetag)
          end
        end if $data_weapons[item.id].note.match(/<(?:ingr?)>/i) || $data_weapons[item.id].note.match(/<(?:key?)>/i)
      end unless item.nil? 
    end
    $data_armors.each do |item| 
      item.note.split(/[\r\n]+/).each do |notetag|
        case notetag
        when /<(?:ingr?)>/i; @get_ingr = true
        when /<\/(?:ingr?)>/i; @get_ingr = false
        when /<(?:key?)>/i; @get_keys = true
        when /<\/(?:key?)>/i; @get_keys = false
        else
          if @get_ingr
            @product << $data_armors[item.id] unless @product.include?($data_armors[item.id]) 
            $data_armors[item.id].get_ingr(notetag)
          end
          if @get_keys
            @keys[notetag] << $data_armors[item.id] 
            $data_armors[item.id].get_keys(notetag)
          end
        end if $data_armors[item.id].note.match(/<(?:ingr?)>/i) || $data_armors[item.id].note.match(/<(?:key?)>/i)
      end unless item.nil? 
    end
    @product.each do |item| checkCanMake?(item) end
  end
  def checkCanMake?(item)
    local_storage_size = item.ingr.size
    item.ingr.each_pair { |k, v| 
      local_storage_reqr = v[0]
      @keys[k].each do |t| local_storage_reqr -= 1 if ($game_party.item_number(t) >= v[1]) end
      local_storage_size -= 1 if local_storage_reqr <= 0  
    }
    item.cmake = (local_storage_size <= 0)
  end
  def resetUse(i)
    @product[i].ingr.each_key { |k| @keys[k].each { |item| item.used = false } }
  end
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
    @product_window = Window_Product.new(0,0)
    @product_window.set_handler(:product,  method(:selectIngredient))
    @product_window.set_handler(:cancel,   method(:return_scene))
    @product_window.help_window = @help_window
    @product_window.activate
  end
  def selectIngredient
    if $game_alchemy.product[@product_window.index_number].cmake
      @store_reqr = $game_alchemy.product[@product_window.index_number].dup
      @product_window.pd = @store_reqr
      @product_window.deactivate; @ingredient_window.activate
      @storeUI = Array.new
    else
      cannot_select; @product_window.activate
    end
  end
  def create_ingredient_window
    @ingredient_window = Window_Ingredient.new(160,0)
    @ingredient_window.set_handler(:ok,     method(:ingredientSelect))
    @ingredient_window.set_handler(:cancel, method(:returnProduct))
    @product_window.help_window = @help_window
    @product_window.ingredient_window = @ingredient_window
    @ingredient_window.deactivate
  end
  def ingredientSelect(i)
    @usedIngr = i
    @storeUI << i
    @ingredient_window.deactivate; @confirm_window.activate
    @confirm_window.show; @confirm_window.open
  end
  def returnProduct
    $game_alchemy.resetUse(@product_window.index_number)
    @ingredient_window.refresh; @product_window.pd = nil
    @ingredient_window.deactivate; @product_window.activate; end
  def create_confirm_window
    @confirm_window = Window_Confirm.new(172, 208)
    @confirm_window.width = 200
    @confirm_window.set_handler(:Confirm,    method(:confirm))
    @confirm_window.set_handler(:Cancel,     method(:cancel))
    @confirm_window.set_handler(:cancel,     method(:cancel))
    @confirm_window.z = 200; @confirm_window.deactivate
    @confirm_window.hide; @confirm_window.close
  end
  def confirm
    @ingredient_window.data[@usedIngr].used = true
    @ingredient_window.refresh; @ingredient_window.activate
    @ingredient_window.select_last; @confirm_window.deactivate
    @confirm_window.hide; @confirm_window.close
    confirm_alchemy if @store_reqr.checkFinish
  end
  def confirm_alchemy
  end
  def cancel
    @ingredient_window.activate; @ingredient_window.select_last
    @confirm_window.deactivate; @confirm_window.hide
    @confirm_window.close
  end
  def cannot_select
    Sound.play_buzzer; b = Bitmap.new(340,60)
    b.draw_text(0, 20,340, 40, "You don't have enough ingredient.")
    w = Window_Message.new; w.contents = b
    w.width = 380; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(180); b.dispose; w.dispose
  end
end

#==============================================================================
# Window_Product
#==============================================================================

class Window_Product < Window_Command

  attr_accessor :ingredient_window
  attr_accessor :index_number
  attr_accessor :pd

  def make_command_list
    $game_alchemy.product.each do |i| add_command(i.name, :product) end
  end
  def window_width; 160 end
  def window_height; 344 end
  def item; $game_alchemy.product && index >= 0 ? $game_alchemy.product[index] : nil end
  def select_last; select($game_alchemy.product.index($game_party.last_item.object) || 0) end
  def draw_item(index)
    rect = item_rect(index)
    rect.x += 4; rect.width -= 8
    icon_index = $game_alchemy.product[index].icon_index
    self.contents.clear_rect(rect)
    if !icon_index.nil?
      rect.x -= 4
      draw_icon(icon_index, rect.x, rect.y, $game_alchemy.product[index].cmake)
      rect.x += 26; rect.width -= 20
    end
    self.contents.clear_rect(rect)
    self.contents.font.color = normal_color
    self.contents.font.color.alpha = $game_alchemy.product[index].cmake ? 255 : 128
    self.contents.draw_text(rect, $game_alchemy.product[index].name)
  end
  def update
    super
    refresh
    ((@pd) ? 
    @ingredient_window.category = @pd :
    @ingredient_window.category = $game_alchemy.product[index]) if @ingredient_window
    @index_number = index
  end
  def ingredient_window=(ingredient_window)
    @ingredient_window = ingredient_window; update end
  def update_help; @help_window.set_item(item) end
  def refresh; super; checkEnable end
  def checkEnable; $game_alchemy.product.each do |i| $game_alchemy.checkCanMake?(i) end; end
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

  attr_reader   :index
  attr_reader   :help_window
  attr_reader   :data
  attr_reader   :ika
  
  def initialize(x, y, width = 384, height = 344)
    super
    @index = -1; @handler = {}; self.padding_bottom = 20; deactivate; 
    refresh; select(1); activate; @category = nil; @data = []
  end
  def contents_height; item_max * 24 end
  def active=(active); super; update_cursor; call_update_help end
  def index=(index); @index = index; update_cursor; call_update_help end
  def select(index); self.index = index if index end
  def unselect; self.index = -1 end
  def help_window=(help_window); @help_window = help_window; call_update_help end
  def select_last; select(@data.index($game_party.last_item.object) || 1) end
  def set_handler(symbol, method); @handler[symbol] = method end
  def call_handler(symbol, i = nil); (i) ? @handler[symbol].call(i) : @handler[symbol].call end
  def cursor_movable?; active && open? && item_max > 0 end
  def cursor_down(wrap = false)
    ((@data[index + 1].is_a?(String)) ? select((index + 2) % item_max) :
    select((index + 1) % item_max)) if index < item_max - 1 || (wrap)
  end
  def cursor_up(wrap = false)
    ((@data[index - 1].is_a?(String)) ? 
    select((index - 2 + item_max) % item_max) : 
    select((index - 1 + item_max) % item_max)) if (index >= 2 || (wrap) || top_row > 0)
  end
  def cursor_pagedown
    if top_row + 13 < item_max
      self.top_row += 13
      (@index + 13 > item_max - 1) ? select(item_max - 1) : 
      ((@data[@index + 13].class.is_a?(String)) ?
      (self.top_row += 1; select(@index + 14)) : select(@index + 13))
    end
  end
  def cursor_pageup
    if top_row > 0
      self.top_row -= 13
      (@index - 13 < 0) ? select(@data[1]) :
      ((@data[@index - 13].is_a?(String)) ? select(@index - 12) : 
      select(@index - 13))
    end
  end
  def update; super; process_cursor_move; process_handling; end
  def process_cursor_move
    return unless cursor_movable?
    last_index = @index
    cursor_down (Input.trigger?(:DOWN))  if Input.repeat?(:DOWN)
    cursor_up   (Input.trigger?(:UP))    if Input.repeat?(:UP)
    cursor_pagedown   if Input.trigger?(:R)
    cursor_pageup     if Input.trigger?(:L)
    Sound.play_cursor if @index != last_index
  end
  def process_handling
    return unless open? && active
    return process_ok       if ok_enabled?        && Input.trigger?(:C)
    return process_cancel   if cancel_enabled?    && Input.trigger?(:B)
    return process_pagedown if Input.trigger?(:R)
    return process_pageup   if Input.trigger?(:L)
  end
  def cancel_enabled?; true end
  def process_ok
    if current_item_enabled?(@ika[index])
      Sound.play_ok; Input.update; deactivate; call_ok_handler(index)
    else; Sound.play_buzzer end
  end
  def process_cancel
    Sound.play_cancel; Input.update; deactivate; call_cancel_handler
  end
  def call_cancel_handler; call_handler(:cancel) end
  def process_pageup
    Sound.play_cursor; Input.update; deactivate; call_handler(:pageup)
  end
  def process_pagedown
    Sound.play_cursor; Input.update; deactivate; call_handler(:pagedown)
  end
  def update_cursor
    (@index < 0) ? cursor_rect.empty : 
    (ensure_cursor_visible; cursor_rect.set(item_rect(@index)))
  end
  def top_row; oy/24 end
  def top_row=(index)
    index = 0 if index < 0
    index = item_max - 1 if index > item_max - 1
    self.oy = index * 24
  end
  def ensure_cursor_visible
    (self.top_row = self.index; self.index += 1) if self.index < self.top_row
    self.top_row = self.index - 12 if self.index > self.top_row + 12
  end
  def call_update_help; update_help if active && @help_window end
  def ok_enabled?; true end
  def call_ok_handler(i); call_handler(:ok, i) end
  def category=(product)
    return if @category == product
    @category = product; refresh
  end
  def index_number; @data.index($game_party.last_item.object) end
  def item_max; @data ? @data.size : 1 end
  def item; @data && index >= 0 ? @data[index] : nil end
  def current_item_enabled?(ik); enable?(@data[index], ik) end
  def item_rect(index)
    rect = Rect.new; rect.width = 372
    rect.height = 24; rect.x = 0
    rect.y = index * 24; rect
  end
  def draw_ingredient
    return if @category.nil?
    @data.size.times { |i| 
      if @data[i].is_a?(String)
        @ik = @data[i]; @ika << @ik

        change_color(normal_color, true) 
        draw_text(24, i * 24, 350, 24, 
          "#{(Keys_Nickname[@data[i]] ||= @data[i])}" + 
          ": Select " + "(%2d)" % @category.ingr[@data[i]][0]) 
      else; (draw_item(i, @ik); @ika << @ik) end }
  end
  def enable?(item, ik); $game_party.item_number(item) >= @category.ingr[ik][1] && 
    !item.used && !@category.finish(ik) end
  def make_item_list
    return if @category.nil?
    @category.ingr.each_key { |k|
    @data << k 
      (0...$game_alchemy.keys[k].size).each { |i|
        @data << $game_alchemy.keys[k][i] }}
  end
  def draw_item(index, ik)
    return if @data.nil?
    item = @data[index]
    if item
      rect = item_rect(index); rect.width -= 4
      draw_item_name(item, rect.x, rect.y, enable?(item, ik))
      draw_item_number(rect, item); draw_item_reqr(rect, item, ik)
    end
  end
  def draw_item_number(rect, item)
    draw_text(270, rect.y, 100, 24, "%2d" % $game_party.item_number(item)) end
  def draw_item_reqr(rect, item, ik)
    draw_text(290, rect.y, 120, 24, "(%2d)" % @category.ingr[ik][1]) end
  def update_help; @help_window.set_item(item) end
  def refresh
    @ika = Array.new; @data = []; make_item_list; create_contents; draw_ingredient
  end
end