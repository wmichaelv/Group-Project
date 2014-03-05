class Game_Interpreter                                      #Ignore
  attr_accessor :map_id, :event_id, :list, :index, :fiber   #Ignore
end                                                         #Ignore
#==============================================================================
#
# Michael Skyrym Crafting + Extended
# Last Updated: 2014.03.02
# V 1.04
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
# - DataManager is the only overloaded class, so compatibility
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
#         SceneManager.call(Scene_BlackSmith)
#         SceneManager.call(Scene_Cooking)
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
#   Notetag for product    =>   <Prod:PT>
#                               <Ingr>
#                               key: (IV,IA)
#                               </Ingr>
#                               PT = Product Type: (Alchemy, BlackSmith, Cooking)
#                               IV = # of Ingredient Variety
#                               IA = # of Ingredient Amount
#                       For ex: <Prod:Alchemy>
#                               <Ingr>
#                               stone: (1,2)
#                               </Ingr>
#                               This item is an Alchemy Product
#                               This item requires 1 variety of 'stone' key
#                               This item requires 2 each of 'stone' key variety
#                       For ex: <Prod:BlackSmith>
#                               <Ingr>
#                               stone: (1,2)
#                               wood: (5,12)
#                               </Ingr>
#                               This item is a BlackSmith Product
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
# - True means the crafting succeed
# - False means the crafting hasn't succeed
# - Default is 100% success rate
#
#==============================================================================

#==============================================================================
# SCENARIO 1
#==============================================================================

#WHEN SUCCEES, CALL Suc_EVENT_ID (common event)
#WHEN FAIL, CALL Fail_EVENT_ID (common event)

#Alchemy Variable And Common Event ID

Variables_ID_Alc = nil #Change variable ID if u're using variable
                       #Change nil to 1 if you're using variable ID 1
                       #Change nil to 500 if you're using variable ID 500
Suc_EVENT_ID_Alc = nil #Change to Event ID for Success
                       #Use Common Event ID or something weird will happen
Fai_EVENT_ID_Alc = nil #Change to Event ID for Failure
                       #Use Common Event ID or something weird will happen

#BlackSmith Variable And Common Event ID

Variables_ID_BS = nil  #Change variable ID if u're using variable
                       #Change nil to 1 if you're using variable ID 1
                       #Change nil to 500 if you're using variable ID 500
Suc_EVENT_ID_BS = nil  #Change to Event ID for Success
                       #Use Common Event ID or something weird will happen
Fai_EVENT_ID_BS = nil  #Change to Event ID for Failure
                       #Use Common Event ID or something weird will happen

#Cooking Variable And Common Event ID

Variables_ID_CK = nil  #Change variable ID if u're using variable
                       #Change nil to 1 if you're using variable ID 1
                       #Change nil to 500 if you're using variable ID 500
Suc_EVENT_ID_CK = nil  #Change to Event ID for Success
                       #Use Common Event ID or something weird will happen
Fai_EVENT_ID_CK = nil  #Change to Event ID for Failure
                       #Use Common Event ID or something weird will happen

#==============================================================================
# SCENARIO 2
#==============================================================================

#WHEN SUCCEES, turn SWITCD_ID on, CALL EVENT_ID (common event)
#WHEN FAIL, turn SWITCD_ID off, CALL EVENT_ID (common event)

SCENARIO_2_SWITCH = false #Change to true if you want to use scenario 2

if SCENARIO_2_SWITCH #Dont erase

  Variables_ID_Alc = nil #Change variable ID if u're using variable
                         #Change nil to 1 if you're using variable ID 1
                         #Change nil to 500 if you're using variable ID 500
  SWITCH_ID_Alc = 999    #Change to SWITCH ID
  EVENT_ID_Alc = nil     #Change to Event ID
                         #Use Common Event ID or something weird will happen
  Variables_ID_BS = nil  #Change variable ID if u're using variable
                         #Change nil to 1 if you're using variable ID 1
                         #Change nil to 500 if you're using variable ID 500
  SWITCH_ID_BS = 999     #Change to SWITCH ID
  EVENT_ID_BS = nil      #Change to Event ID
                         #Use Common Event ID or something weird will happen
  Variables_ID_CK = nil  #Change variable ID if u're using variable
                         #Change nil to 1 if you're using variable ID 1
                         #Change nil to 500 if you're using variable ID 500
  SWITCH_ID_CK = 999     #Change to SWITCH ID
  EVENT_ID_CK = nil      #Change to Event ID
                         #Use Common Event ID or something weird will happen
end #Don't erase

#==============================================================================
# More Customization~
#  - Edit As You See Fit
#==============================================================================

Success_Message = "Gratz, Ya Dawg"
Fail_Message = "Nigga stole Yo Item"
Cannot_Make = "Not Enough Ingredient"

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
# Scene_Alchemy Success Rate: Edit At Risk
#==============================================================================

if SCENARIO_2_SWITCH == false #Run first scenario

  class Scene_Alchemy < Scene_MenuBase

    def success_rate

      if rand(100) <= ((Variables_ID_Alc) ? $game_variables[Variables_ID_Alc] : 100)
        ce = $data_common_events[Suc_EVENT_ID_Alc] unless Suc_EVENT_ID_Alc.nil?
        if ce
          c = Game_Interpreter.new
          c.clear
          c.map_id = $game_map.map_id
          c.event_id = 0
          c.list = ce.list
          c.create_fiber
          c.wait_for_message
          while c.list[c.index] do
            c.execute_command
            c.index += 1
          end
          c.fiber = nil
        end
        return true
      else
        ce = $data_common_events[Fai_EVENT_ID_Alc] unless Fai_EVENT_ID_Alc.nil?
        if ce
          c = Game_Interpreter.new
          c.clear
          c.map_id = $game_map.map_id
          c.event_id = 0
          c.list = ce.list
          c.create_fiber
          c.wait_for_message
          while c.list[c.index] do
            c.execute_command
            c.index += 1
          end
          c.fiber = nil
        end
        return false
      end
    end
  end

  class Scene_BlackSmith < Scene_MenuBase

    def success_rate

      if rand(100) <= ((Variables_ID_BS) ? $game_variables[Variables_ID_BS] : 100)
        ce = $data_common_events[Suc_EVENT_ID_BS] unless Suc_EVENT_ID_BS.nil?
        if ce
          c = Game_Interpreter.new
          c.clear
          c.map_id = $game_map.map_id
          c.event_id = 0
          c.list = ce.list
          c.create_fiber
          c.wait_for_message
          while c.list[c.index] do
            c.execute_command
            c.index += 1
          end
          c.fiber = nil
        end
        return true
      else
        ce = $data_common_events[Fai_EVENT_ID_BS] unless Fai_EVENT_ID_BS.nil?
        if ce
          c = Game_Interpreter.new
          c.clear
          c.map_id = $game_map.map_id
          c.event_id = 0
          c.list = ce.list
          c.create_fiber
          c.wait_for_message
          while c.list[c.index] do
            c.execute_command
            c.index += 1
          end
          c.fiber = nil
        end
        return false
      end
    end
  end

  class Scene_Cooking < Scene_MenuBase

    def success_rate

      if rand(100) <= ((Variables_ID_CK) ? $game_variables[Variables_ID_CK] : 100)
        ce = $data_common_events[Suc_EVENT_ID_CK] unless Suc_EVENT_ID_CK.nil?
        if ce
          c = Game_Interpreter.new
          c.clear
          c.map_id = $game_map.map_id
          c.event_id = 0
          c.list = ce.list
          c.create_fiber
          c.wait_for_message
          while c.list[c.index] do
            c.execute_command
            c.index += 1
          end
          c.fiber = nil
        end
        return true
      else
        ce = $data_common_events[Fai_EVENT_ID_CK] unless Fai_EVENT_ID_CK.nil?
        if ce
          c = Game_Interpreter.new
          c.clear
          c.map_id = $game_map.map_id
          c.event_id = 0
          c.list = ce.list
          c.create_fiber
          c.wait_for_message
          while c.list[c.index] do
            c.execute_command
            c.index += 1
          end
          c.fiber = nil
        end
        return false
      end
    end
  end


else #Run second scenario

  class Scene_Alchemy < Scene_MenuBase

    def success_rate

      $game_switches[SWITCH_ID_Alc] = 
      rand(100) <= ((Variables_ID_Alc) ? $game_variables[Variables_ID_Alc] : 100)
      ce = $data_common_events[EVENT_ID_Alc] unless EVENT_ID_Alc.nil?
      if ce
        c = Game_Interpreter.new
        c.clear
        c.map_id = $game_map.map_id
        c.event_id = 0
        c.list = ce.list
        c.create_fiber
        c.wait_for_message
        while c.list[c.index] do
          c.execute_command
          c.index += 1
        end
        c.fiber = nil
      end
      $game_switches[SWITCH_ID_Alc]
    end
  end

  class Scene_BlackSmith < Scene_MenuBase

    def success_rate

      $game_switches[SWITCH_ID_BS] = 
      rand(100) <= ((Variables_ID_BS) ? $game_variables[Variables_ID_BS] : 100)
      ce = $data_common_events[EVENT_ID_BS] unless EVENT_ID_BS.nil?
      if ce
        c = Game_Interpreter.new
        c.clear
        c.map_id = $game_map.map_id
        c.event_id = 0
        c.list = ce.list
        c.create_fiber
        c.wait_for_message
        while c.list[c.index] do
          c.execute_command
          c.index += 1
        end
        c.fiber = nil
      end
      $game_switches[SWITCH_ID_BS]
    end
  end

  class Scene_Cooking < Scene_MenuBase

    def success_rate

      $game_switches[SWITCH_ID_CK] = 
      rand(100) <= ((Variables_ID_CK) ? $game_variables[Variables_ID_CK] : 100)
      ce = $data_common_events[EVENT_ID_CK] unless EVENT_ID_CK.nil?
      if ce
        c = Game_Interpreter.new
        c.clear
        c.map_id = $game_map.map_id
        c.event_id = 0
        c.list = ce.list
        c.create_fiber
        c.wait_for_message
        while c.list[c.index] do
          c.execute_command
          c.index += 1
        end
        c.fiber = nil
      end
      $game_switches[SWITCH_ID_CK]
    end
  end

end

#==============================================================================
# Bio
#==============================================================================
#
# 2014.03.02 - V 1.04  Expand The Script Into Crafting [ Add BlackSmith + Cooking]
#                      Introduce Level Of Appearance
# 2014.02.27 - V 1.03  GUI Update
#                      Custom Message Upon Success / Fail / N/A is initialized
#                      Cut Down Performance Cost
# 2014.02.25 - V 1.02  Cut Down Performance Cost
#                      Fixed Custom SaveScript Compatibility
# 2014.02.24 - V 1.01  Minor event call fix and script trimmed down
# 2014.02.23 - V 1.00  Script is released and up for bug testing
# 2014.02.23 - V 0.14  Implementing Alchemy Algoritm
# 2014.02.22 - V 0.13  GUI is finished
# 2014.02.10 - V 0.12  Notetag reader is implemented
# 2014.02.09 - V 0.11  Game_Alchemy is made
# 2014.02.08 - V 0.1   Script is initailized
#
#==============================================================================

class SkyCraft
  attr_accessor :id, :name, :icon_index, :description, :note
  attr_accessor :cmake, :ingr, :keys, :used
  attr_accessor :itype

  def initialize(item)
    @id = item.id
    @name = item.name
    @icon_index = item.icon_index
    @description = item.description
    @note = item.note
    @itype = 0 if item.is_a?(RPG::Item)
    @itype = 1 if item.is_a?(RPG::Weapon)
    @itype = 2 if item.is_a?(RPG::Armor)
    @cmake = false
  end

  def cb
    case @itype
    when 0; return $data_items[@id]
    when 1; return $data_weapons[@id]
    when 2; return $data_armors[@id]
    end
  end

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
    @used = Hash.new if @used.nil?
    @used[string] = false
  end
  def nf(string); @ingr[string][0] != 0 end
  def cF; @ingr.each_key do |k|; return false if nf(k) end; return true end
  def reset_ingr(key); @ingr[key] = @refrigerator[key].dup end

end

#==============================================================================
# DataManager
#==============================================================================

module DataManager
  class << self; alias mcgo create_game_objects end
  def self.create_game_objects
    mcgo
    $ga = Game_Alchemy.new
    $gb = Game_BlackSmith.new
    $gc = Game_Cooking.new
  end
end

#==============================================================================
# Game_Alchemy
#==============================================================================

class Game_Alchemy

  attr_accessor :pr, :keys

  def initialize
    @pr = Array.new
    @keys = Hash.new {|h,k| h[k]=[]}
    [$data_items, $data_weapons, $data_armors].each { |array|
      array.each { |i|
        @just_once = true
        i.note.split(/[\r\n]+/).each { |nt|
          case nt
          when /<(?:ingr?)>/i; @gi = true
          when /<\/(?:ingr?)>/i; @gi = false
          when /<(?:key?)>/i; @gk = true
          when /<\/(?:key?)>/i; @gk = false
          else
            if @gi
              (@just_once = false; @pr << SkyCraft.new(i)) if @just_once; @pr.last.get_ingr(nt)
            end
            if @gk
              @keys[nt] << SkyCraft.new(i); @keys[nt].last.get_keys(nt)
            end
          end if (i.note.match(/<(?:ingr?)>/i) && 
            i.note.match(/<(?:prod:alchemy?)>/i)) ||
            i.note.match(/<(?:key?)>/i)
        } unless i.nil?
      }
    }
    @pr.each { |item| checkCanMake?(item) }
  end
  def checkCanMake?(item)
    getPair(item)
    lss = item.ingr.size
    sp = Hash.new
    item.ingr.each_pair { |k, v|
      lsr = v[0]
      @keys[k].each { |t| 
        ((@p.include?(t.name)) ? sp[t.name] ||= 0 : lsr -= 1) if $game_party.item_number(t.cb) >= v[1]
        (sp[t.name] += v[1]; lsr -= 1 if $game_party.item_number(t.cb) >= sp[t.name]) if sp[t.name] && lsr > 0
      }
      lss -= 1 if lsr <= 0 
    }
    item.cmake = (lss <= 0); @p = nil; sp = nil
  end
  def getPair(item)
    b = Array.new; @p = Array.new
    item.ingr.each_key { |k| @keys[k].each { |i| (b.include?(i.name)) ? @p << i.name : b << i.name} }
  end

  def rU(i); @pr[i].ingr.each_key { |k| @keys[k].each { |item| item.used[k] = false } } end
  def rR(i); @pr[i].ingr.each_key { |k| @pr[i].reset_ingr(k)} end
end

#==============================================================================
# Game_Alchemy
#==============================================================================

class Game_BlackSmith

  attr_accessor :pr, :keys

  def initialize
    @pr = Array.new
    @keys = Hash.new {|h,k| h[k]=[]}
    [$data_items, $data_weapons, $data_armors].each { |array|
      array.each { |i|
        @just_once = true
        i.note.split(/[\r\n]+/).each { |nt|
          case nt
          when /<(?:ingr?)>/i; @gi = true
          when /<\/(?:ingr?)>/i; @gi = false
          when /<(?:key?)>/i; @gk = true
          when /<\/(?:key?)>/i; @gk = false
          else
            if @gi
              (@just_once = false; @pr << SkyCraft.new(i)) if @just_once; @pr.last.get_ingr(nt)
            end
            if @gk
              @keys[nt] << SkyCraft.new(i); @keys[nt].last.get_keys(nt)
            end
          end if (i.note.match(/<(?:ingr?)>/i) && 
            i.note.match(/<(?:prod:blacksmith?)>/i)) ||
            i.note.match(/<(?:key?)>/i)
        } unless i.nil?
      }
    }
    @pr.each { |item| checkCanMake?(item) }
  end
  def checkCanMake?(item)
    getPair(item)
    lss = item.ingr.size
    sp = Hash.new
    item.ingr.each_pair { |k, v|
      lsr = v[0]
      @keys[k].each { |t| 
        ((@p.include?(t.name)) ? sp[t.name] ||= 0 : lsr -= 1) if $game_party.item_number(t.cb) >= v[1]
        (sp[t.name] += v[1]; lsr -= 1 if $game_party.item_number(t.cb) >= sp[t.name]) if sp[t.name] && lsr > 0
      }
      lss -= 1 if lsr <= 0 
    }
    item.cmake = (lss <= 0); @p = nil; sp = nil
  end
  def getPair(item)
    b = Array.new; @p = Array.new
    item.ingr.each_key { |k| @keys[k].each { |i| (b.include?(i.name)) ? @p << i.name : b << i.name} }
  end

  def rU(i); @pr[i].ingr.each_key { |k| @keys[k].each { |item| item.used[k] = false } } end
  def rR(i); @pr[i].ingr.each_key { |k| @pr[i].reset_ingr(k)} end
end

#==============================================================================
# Game_Cooking
#==============================================================================

class Game_Cooking

  attr_accessor :pr, :keys

  def initialize
    @pr = Array.new
    @keys = Hash.new {|h,k| h[k]=[]}
    [$data_items, $data_weapons, $data_armors].each { |array|
      array.each { |i|
        @just_once = true
        i.note.split(/[\r\n]+/).each { |nt|
          case nt
          when /<(?:ingr?)>/i; @gi = true
          when /<\/(?:ingr?)>/i; @gi = false
          when /<(?:key?)>/i; @gk = true
          when /<\/(?:key?)>/i; @gk = false
          else
            if @gi
              (@just_once = false; @pr << SkyCraft.new(i)) if @just_once; @pr.last.get_ingr(nt)
            end
            if @gk
              @keys[nt] << SkyCraft.new(i); @keys[nt].last.get_keys(nt)
            end
          end if (i.note.match(/<(?:ingr?)>/i) && 
            i.note.match(/<(?:prod:cooking?)>/i)) ||
            i.note.match(/<(?:key?)>/i)
        } unless i.nil?
      }
    }
    @pr.each { |item| checkCanMake?(item) }
  end
  def checkCanMake?(item)
    getPair(item)
    lss = item.ingr.size
    sp = Hash.new
    item.ingr.each_pair { |k, v|
      lsr = v[0]
      @keys[k].each { |t| 
        ((@p.include?(t.name)) ? sp[t.name] ||= 0 : lsr -= 1) if $game_party.item_number(t.cb) >= v[1]
        (sp[t.name] += v[1]; lsr -= 1 if $game_party.item_number(t.cb) >= sp[t.name]) if sp[t.name] && lsr > 0
      }
      lss -= 1 if lsr <= 0 
    }
    item.cmake = (lss <= 0); @p = nil; sp = nil
  end
  def getPair(item)
    b = Array.new; @p = Array.new
    item.ingr.each_key { |k| @keys[k].each { |i| (b.include?(i.name)) ? @p << i.name : b << i.name} }
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
    @pw = Window_Product.new(0,0,0)
    @pw.set_handler(:product,  method(:selectIngredient))
    @pw.set_handler(:cancel,   method(:return_scene))
    @pw.help_window = @help_window
    @pw.activate
    @pw.refresh
  end
  def selectIngredient
    if $ga.pr[@pw.in].cmake
      @pw.deactivate; @iw.activate
      @iw.sl; @sui = Array.new
    else
      cs; @pw.activate
    end
  end
  def create_ingredient_window
    @iw = Window_Ingredient.new(48,0)
    @iw.sh(:ok,     method(:ingredientSelect))
    @iw.sh(:cancel, method(:returnProduct))
    @iw.hw = @help_window
    @pw.iw = @iw
    @iw.deactivate
  end
  def ingredientSelect(i)
    @usedIngr = i; @sui << i
    @iw.deactivate; @cw.activate
    @cw.show; @cw.open
  end
  def returnProduct
    $ga.rU(@pw.in); $ga.rR(@pw.in)
    @pw.update; @iw.refresh; @iw.sl;
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
      @iw.refresh;
      @pw.update;
      if $ga.pr[@pw.in].cmake
        @iw.activate; @iw.sl
      else
        @pw.activate 
      end
    else
      @iw.refresh; @iw.activate; @iw.sl
    end
  end
  def confirm_alchemy
    @sui.each do |i|
      $game_party.gain_item(@iw.data[i].cb, -$ga.pr[@pw.in].ingr[@iw.ika[i]][1])
    end
    (success_rate) ? ($game_party.gain_item($ga.pr[@pw.in].cb,1); sm) : fm
  end
  def cancel
    @iw.activate; @iw.sl; @cw.deactivate; @cw.hide; @cw.close
  end
  def cs
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Cannot_Make).width + 2,60)
    b.draw_text(0, 20,w.text_size(Cannot_Make).width + 2, 40, Cannot_Make); w.contents = b
    w.width = w.text_size(Cannot_Make).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
  def sm
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Success_Message).width + 2,60)
    b.draw_text(0, 20,w.text_size(Success_Message).width + 2, 40, Success_Message); w.contents = b
    w.width = w.text_size(Success_Message).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
  def fm
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Fail_Message).width + 2,60)
    b.draw_text(0, 20,w.text_size(Fail_Message).width + 2, 40, Fail_Message); w.contents = b
    w.width = w.text_size(Fail_Message).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
end

#==============================================================================
# Scene_BlackSmith
#==============================================================================

class Scene_BlackSmith < Scene_MenuBase
  def start
    super
    create_help_window; create_product_window
    create_ingredient_window; create_confirm_window
    @help_window.x = 0; @help_window.y = 344
    @help_window.width = 544; @help_window.height = 72
  end
  def create_product_window
    @pw = Window_Product.new(0,0,1)
    @pw.set_handler(:product,  method(:selectIngredient))
    @pw.set_handler(:cancel,   method(:return_scene))
    @pw.help_window = @help_window
    @pw.activate
    @pw.refresh
  end
  def selectIngredient
    if $gb.pr[@pw.in].cmake
      @pw.deactivate; @iw.activate
      @iw.sl; @sui = Array.new
    else
      cs; @pw.activate
    end
  end
  def create_ingredient_window
    @iw = Window_Ingredient.new(48,0)
    @iw.sh(:ok,     method(:ingredientSelect))
    @iw.sh(:cancel, method(:returnProduct))
    @iw.hw = @help_window
    @pw.iw = @iw
    @iw.deactivate
  end
  def ingredientSelect(i)
    @usedIngr = i; @sui << i
    @iw.deactivate; @cw.activate
    @cw.show; @cw.open
  end
  def returnProduct
    $gb.rU(@pw.in); $gb.rR(@pw.in)
    @pw.update; @iw.refresh; @iw.sl;
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
    $gb.pr[@pw.in].ingr[@iw.ika[@usedIngr]][0] -= 1
    @cw.deactivate; @cw.hide; @cw.close
    if $gb.pr[@pw.in].cF
      confirm_blacksmith
      $gb.rU(@pw.in); $gb.rR(@pw.in)
      @iw.refresh;
      @pw.update;
      if $gb.pr[@pw.in].cmake
        @iw.activate; @iw.sl
      else
        @pw.activate 
      end
    else
      @iw.refresh; @iw.activate; @iw.sl
    end
  end
  def confirm_blacksmith
    @sui.each do |i|
      $game_party.gain_item(@iw.data[i].cb, -$gb.pr[@pw.in].ingr[@iw.ika[i]][1])
    end
    (success_rate) ? ($game_party.gain_item($gb.pr[@pw.in].cb,1); sm) : fm
  end
  def cancel
    @iw.activate; @iw.sl; @cw.deactivate; @cw.hide; @cw.close
  end
  def cs
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Cannot_Make).width + 2,60)
    b.draw_text(0, 20,w.text_size(Cannot_Make).width + 2, 40, Cannot_Make); w.contents = b
    w.width = w.text_size(Cannot_Make).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
  def sm
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Success_Message).width + 2,60)
    b.draw_text(0, 20,w.text_size(Success_Message).width + 2, 40, Success_Message); w.contents = b
    w.width = w.text_size(Success_Message).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
  def fm
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Fail_Message).width + 2,60)
    b.draw_text(0, 20,w.text_size(Fail_Message).width + 2, 40, Fail_Message); w.contents = b
    w.width = w.text_size(Fail_Message).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
end

#==============================================================================
# Scene_Cooking
#==============================================================================

class Scene_Cooking < Scene_MenuBase
  def start
    super
    create_help_window; create_product_window
    create_ingredient_window; create_confirm_window
    @help_window.x = 0; @help_window.y = 344
    @help_window.width = 544; @help_window.height = 72
  end
  def create_product_window
    @pw = Window_Product.new(0,0,2)
    @pw.set_handler(:product,  method(:selectIngredient))
    @pw.set_handler(:cancel,   method(:return_scene))
    @pw.help_window = @help_window
    @pw.activate
    @pw.refresh
  end
  def selectIngredient
    if $gc.pr[@pw.in].cmake
      @pw.deactivate; @iw.activate
      @iw.sl; @sui = Array.new
    else
      cs; @pw.activate
    end
  end
  def create_ingredient_window
    @iw = Window_Ingredient.new(48,0)
    @iw.sh(:ok,     method(:ingredientSelect))
    @iw.sh(:cancel, method(:returnProduct))
    @iw.hw = @help_window
    @pw.iw = @iw
    @iw.deactivate
  end
  def ingredientSelect(i)
    @usedIngr = i; @sui << i
    @iw.deactivate; @cw.activate
    @cw.show; @cw.open
  end
  def returnProduct
    $gc.rU(@pw.in); $gc.rR(@pw.in)
    @pw.update; @iw.refresh; @iw.sl;
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
    $gc.pr[@pw.in].ingr[@iw.ika[@usedIngr]][0] -= 1
    @cw.deactivate; @cw.hide; @cw.close
    if $gc.pr[@pw.in].cF
      confirm_cooking
      $gc.rU(@pw.in); $gc.rR(@pw.in)
      @iw.refresh;
      @pw.update;
      if $gc.pr[@pw.in].cmake
        @iw.activate; @iw.sl
      else
        @pw.activate 
      end
    else
      @iw.refresh; @iw.activate; @iw.sl
    end
  end
  def confirm_cooking
    @sui.each do |i|
      $game_party.gain_item(@iw.data[i].cb, -$gc.pr[@pw.in].ingr[@iw.ika[i]][1])
    end
    (success_rate) ? ($game_party.gain_item($gc.pr[@pw.in].cb,1); sm) : fm
  end
  def cancel
    @iw.activate; @iw.sl; @cw.deactivate; @cw.hide; @cw.close
  end
  def cs
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Cannot_Make).width + 2,60)
    b.draw_text(0, 20,w.text_size(Cannot_Make).width + 2, 40, Cannot_Make); w.contents = b
    w.width = w.text_size(Cannot_Make).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
  def sm
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Success_Message).width + 2,60)
    b.draw_text(0, 20,w.text_size(Success_Message).width + 2, 40, Success_Message); w.contents = b
    w.width = w.text_size(Success_Message).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
  def fm
    w = Window_Message.new; Sound.play_buzzer; b = Bitmap.new(w.text_size(Fail_Message).width + 2,60)
    b.draw_text(0, 20,w.text_size(Fail_Message).width + 2, 40, Fail_Message); w.contents = b
    w.width = w.text_size(Fail_Message).width + 32; w.height = 100; w.visible = true; w.openness = 255
    w.x = 100; w.y = 180; w.back_opacity = 255; w.opacity = 255
    w.update; Graphics.wait(70); b.dispose; w.dispose
  end
end

#==============================================================================
# Window_Product
#==============================================================================

class Window_Product < Window_Command

  attr_accessor :iw #Ingredient Window
  attr_accessor :in #Index Number

  def initialize(x, y, i)
    super(x, y)
    @ptype = i
  end

  def make_command_list
    case @ptype
    when 0; $ga.pr.each do |i| add_command(i.name, :product) end
    when 1; $gb.pr.each do |i| add_command(i.name, :product) end
    when 2; $gc.pr.each do |i| add_command(i.name, :product) end 
    end
  end
  def window_width; 48 end
  def window_height; 344 end
  def item; 
    case @ptype
    when 0; $ga.pr && index >= 0 ? $ga.pr[index] : nil 
    when 1; $gb.pr && index >= 0 ? $gb.pr[index] : nil 
    when 2; $gc.pr && index >= 0 ? $gc.pr[index] : nil 
    end
  end
  def select_last; select(0) end
  def update
    super
    case @pytpe
    when 0; @iw.c = $ga.pr[index] if @iw
    when 1; @iw.c = $gb.pr[index] if @iw
    when 2; @iw.c = $gc.pr[index] if @iw
    end
    @in = index
    refresh 
  end
  def iw=(iw); @iw = iw; update end
  def update_help; @help_window.set_item(item) end
  def refresh; super; checkEnable end
  def checkEnable(k = nil)
    case @ptype
    when 0; $ga.pr.each do |i| $ga.checkCanMake?(i) end
    when 1; $gb.pr.each do |i| $gb.checkCanMake?(i) end
    when 2; $gc.pr.each do |i| $gc.checkCanMake?(i) end
    end
  end
  def draw_icon(i, x, y, enabled = true)
    bitmap = Cache.system("Iconset")
    rect = Rect.new(i % 16 * 24, i / 16 * 24, 24, 24)
    contents.blt(x, y, bitmap, rect, enabled ? 255 : 100)
  end
  def item_rect(i)
    rect = Rect.new; rect.width = rect.height = 24
    rect.x = 0; rect.y = i * 24; rect
  end
  def draw_item(index)
    rect = item_rect(index)
    rect.x += 4; rect.width -= 8
    case @ptype
    when 0; icon_index = $ga.pr[index].icon_index
    when 1; icon_index = $gb.pr[index].icon_index
    when 2; icon_index = $gc.pr[index].icon_index
    end
    self.contents.clear_rect(rect)
    if !icon_index.nil?
      rect.x -= 4
      case @ptype
      when 0; draw_icon(icon_index, rect.x, rect.y, $ga.pr[index].cmake)
      when 1; draw_icon(icon_index, rect.x, rect.y, $gb.pr[index].cmake)
      when 2; draw_icon(icon_index, rect.x, rect.y, $gc.pr[index].cmake)
      end
      rect.x += 26; rect.width -= 20
    end
    self.contents.clear_rect(rect)
  end
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
  
  def initialize(x, y, width = 496, height = 344)
    super
    @index = -1; @h = {}; self.padding_bottom = 20; deactivate; 
    refresh; select(1); activate; @c = nil; @data = []
  end
  def in; @data.index($game_party.last_item.object) end #index number
  def contents_height; (item_max + 2) * 24 end
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
    if top_row + 11 < item_max
      self.top_row += 11
      (@index + 11 > item_max - 1) ? select(item_max - 1) : 
      ((@data[@index + 11].class.is_a?(String)) ?
      (self.top_row += 1; select(@index + 12)) : select(@index + 11))
    end
  end
  def cpu
    if top_row > 0
      self.top_row -= 11
      (@index - 11 < 0) ? select(@data[1]) :
      ((@data[@index - 11].is_a?(String)) ? select(@index - 10) : 
      select(@index - 11))
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
    self.top_row = index - 10 if index > top_row + 10
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
    rect = Rect.new; rect.width = 472; rect.height = 24
    rect.x = 0; rect.y = (i + 2) * 24; rect
  end
  def di
    return if @c.nil?
    draw_title
    @data.size.times { |i| 
      if @data[i].is_a?(String)
        draw_text(24, 0, 350, 48, 
          "#{@c.name}")
        @ik = @data[i]; @ika << @ik
        change_color(text_color(0), @c.nf(@ik)) 
        draw_text(24, (i + 2) * 24, 350, 24, 
          "#{(Keys_Nickname[@data[i]] ||= @data[i])}" + 
          ": Select " + "(%2d)" % @c.ingr[@data[i]][0]) 
      else; (draw_item(i, @ik); @ika << @ik) end }
  end
  def draw_title
  end
  def he(item, ik); $game_party.item_number(item.cb) >= @c.ingr[ik][1] end
  def enable?(item, ik); he(item, ik) && !item.used[ik] && @c.nf(ik) end
  def mil
    return if @c.nil?
    @c.ingr.each_key { |k|
      @data << k
      (@data << $ga.keys[k].dup).flatten if $ga.pr.include? @c
      (@data << $gb.keys[k].dup).flatten if $gb.pr.include? @c
      (@data << $gc.keys[k].dup).flatten if $gc.pr.include? @c
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
    draw_text(270, rect.y, 100, 24, "%2d" % $game_party.item_number(item.cb)) end
  def dir(rect, item, ik)
    draw_text(290, rect.y, 120, 24, "(%2d)" % @c.ingr[ik][1]) end
  def uh; @hw.set_item(item) end
  def refresh; @ika = Array.new; @data = []; mil; create_contents; di end
end