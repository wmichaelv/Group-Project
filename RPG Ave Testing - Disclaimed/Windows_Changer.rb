#==============================================================================
#
# Michael Windows Changer
# Last Updated: 2014.01.06
# Requirement: RPG Maker VX Ace
#             -Knowledge of 'how to use scripts'
#             -Knowledge of Window Designation (basically know which window is
#              which)
#
#==============================================================================

#==============================================================================
#Compability: - Script should be compatible with any other script(s).
#             - If the picture you use doesn't have the right size as the
#               window's size, then use window_show_all to show picture in full size,
#               then move it using window_show_all_move.
#             - Bitmap cannot convert .gif file yet.
#
#==============================================================================

#==============================================================================
#Credit:
# - Big thanks to Mithran for the efficiency check
# - Other scripters in the discussion
#==============================================================================

#==============================================================================
#  Biography lol
#==============================================================================
# 2013.01.06 --Increaseeeeeeeeeeeeddddddd readibility. .______________________.
#            --File is trimmed down and readibility is increased - Credit to Mithran
# 2013.01.05 --File is trimmed down
# 2013.01.03 --window_show_all and window_move_origin and their counter-parts
#              are introduced
#            --Reforming the arrays
#            --Increased readibility :/
# 2013.01.02 --Naming convention is improved
#            --Some methods are simplified
#            --File is trimmed down
#            --@temp1 & @temp2 variables are removed
#            --Replacing switch on the windows itself instead of scenes
# 2013.01.01 --window_opacity(i, opacity) is introduced
# 2013.12.30 --Trimmed down the file size
# 2013.12.27 --Fixed window_default(i)
#            --window_depth(i, depth) is introduced & implemented
#            --Fixed window_default(i) and window_center(i) is introduced
#            --Fixed Scene_File
# 2013.12.26 --Fixed Scene_Title - Sprite is now in correlation with the window
#            --Raising Compatibility
#            --window_move(i, x, y, width, height) is introduced
#            --window_default(i) is introduced
#            --All Scenes are overloaded with the new switch
# 2013.12.25 --Fixed bugs on local @temp1 and @temp2 disposal
#            --Scene_MenuBase is added
#            --Fixed bugs for 'name'
#            --Fixed bugs on various Scenes
# 2013.12.24 --Script is uploaded
# 2013.12.23 --Window_Message is completed
# 2013.12.22 --Scene_Equip is completed
#            --Scene_Skill is completed
#            --Scene_Item is completed
#            --Scene_ItemBase is completed
#            --Scene_Menu is completed
#            --Scene_Map is completed
#            --Scene_Title is completed
#            --Scene_Menu is completed
#            --All Scenes that need to be overloaded have been overloaded
#            --Updating array to store image name
# 2013.12.21 --Installing Game_Interpreter
#            --Scene_Battle is completed
#            --Scene_Debug is completed
#            --Scene_Name is completed
#            --Scene_Shop is completed
#            --Scene_End is completed
#            --Scene_Save and Scene_Load skipped -- No Window yield
#            --Scene_File is completed
#            --Scene_Status is completed
# 2013.12.20 --Scene_Battle is completed
# 2013.12.19 --Works for Windows_BattleStatus
# 2013.12.18 --Script is initialized -- Getting know Ruby + RGSS Libraries
#==============================================================================
# Description
#==============================================================================
# This script is used to stick image(s) to windows with your desired image(s)
# by overloading all windows. You can also edit it's location.
#
#==============================================================================
# Installation
#==============================================================================
# - This script will OVERLOAD all DEFAULT windows.
# - Place this script to be below other overloading windows script. If you are
#   not sure where, place it to be the lowest of the material section.
# - If you have a bust script, put the bust script anywhere below this script.
# - Place the window Images (by default) in that folder
#   <your project>/Graphics/Windows/(type of windows)/
#
#==============================================================================
# How to Use:
#  - window_on(window #, 'file_name.extention_name')
#  For Example:
#  window_on(6, 'ex.jpg') -> activate window #6 background(window_gold_changer)
#                            with ex.jpg as the content
#                         -> Btw, window #6 is Window_Gold
#                         -> If you want to change the picture, just do the same
#                            thing, but use different file_name.
#
#  - window_off(window #)
#  For Example:
#  window_off(5) -> deactivate window #5 background and its content
#                -> deactivating will hide the background and return the
#                   window rectangle back to the boring blue color with its
#                   redundant white padding.
#
#  - window_show_all(i) -> JUST USE THIS COMMAND and window_on if you're confused with
#                          coordination. Basically window_show_all will display
#                          your picture from the center of the window.
#                       -> Do I have to use this for every picture that's oversized?
#                       -> No, just do window_on(6, 'ex.jpg', 'show_all') <<< see the 'show_all'?
#                          (don't forget the quotation mark)
#  - window_show_all_move(i, x, y) -> To move the fixed position
#
#  - window_center(i)
#  For Example:
#  window_center(6) -> Move the window #6 background content to center position
#                       Default position is at the center (272,208) of the graphic and
#                       occupy the size of the graphic (if your picture has size
#                       larger than the graphic (544 x 416), it will fill the graphic)
#                    -> Make sure that switch is 'on' or else nothing would happen.
#
#  - window_move_full(i, x, y, width, height)
#  For Example:
#  window_move_full(6, 24, -24, 400, 400)
#  -> TIPS: If you are not sure how to adjust, the coordinate, starts with
#           window_move first.
#  -> move the window #6 background content to (24,-24) position. Remember that
#     center coordinate is (0,0) and to move up, y needs to be negative, to move
#     down, y needs to be positive, to move left, x needs to be negative, to move
#     right, x needs to be positive.
#  -> width and height are there as a border to make sure that your picture doesn't
#     go beyond the given size (400 x 400).
#  -> TIPS: If you don't want to have border, simply set the border to be the
#           Graphics' height and width.
#           To set Graphics' height and width:
#           window_move(5, 24, -24, Graphics.width, Graphics.height)
#
#  - window_default(i)
#  For Example:
#  window_default(6) -> Turn off movement switch for window #6 background
#                    -> This will return window #6 to the original position
#
#  - window_depth(i, depth)
#  For Example:
#  window_depth(6, -1) -> Increases the depthness of window #6 background content
#                         by -1, which means, if there's other window background
#                         in the graphic beside window #6 background, that window
#                         background will appear to be above window #6 background.
#                      -> Make sure that switch is 'on' or else nothing would happen.
#
# - window_opacity(i, opacity)
# For Example:
# window_opacity(6, 0) -> Set window #6 background opacity to 0 (100% transparent).
#                      -> Opacity value is from 0 (fully see-through) to 255 (solid).
#                      -> Make sure that switch is 'on' or else nothing would happen.
#                      -> Default opacity is 255 when window background is on.
#
#  Have Fun!
#
#==============================================================================
module Windows_Changer
  #============================================================================
  # Windows Changer = USE Game_Interpret for activation (scroll all the way
  #                   down for the key words (window_on and window_off))
  # Use the element # list below for 'window #'.
  #
  # Default Switch = off (switch only available for activate windows)
  # This is for Original Windows - Scroll Down for Windows from other scripts
  # the array stores these values:
  # [file_name,
  #  file_directory,
  #  sprite.z,
  #  sprite.opacity,
  #  sprite.type_of_movement_change,
  #  sprite.x,
  #  sprite.y,
  #  sprite.src_rect.x,
  #  sprite.src_rect.y,
  #  sprite.src_rect.width,
  #  sprite.src_rect.height]
  #============================================================================
  Michael_Windows_Background_ftw_101_Array = {
  Window =>
  [0,"Element #0","Graphics\\Windows",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_Base =>
  [1,"Element #1","Graphics\\Windows\\Window_Base",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_Selectable =>
  [2,"Element #2","Graphics\\Windows\\Window_Selectable",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_Command =>
  [3,"Element #3","Graphics\\Windows\\Window_Command",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_HorzCommand =>
  [4,"Element #4","Graphics\\Windows\\Window_HorzCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_Help =>
  [5,"Element #5","Graphics\\Windows\\Window_Help",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_Gold =>
  [6,"Element #6","Graphics\\Windows\\Window_Gold",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_MenuCommand =>
  [7,"Element #7","Graphics\\Windows\\Window_MenuCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_MenuStatus =>
  [8,"Element #8","Graphics\\Windows\\Window_MenuStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_MenuActor =>
  [9,"Element #9","Graphics\\Windows\\Window_MenuActor",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ItemCategory =>
  [10,"Element #10","Graphics\\Windows\\Window_ItemCategory",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ItemList =>
  [11,"Element #11","Graphics\\Windows\\Window_ItemList",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_SkillCommand =>
  [12,"Element #12","Graphics\\Windows\\Window_SkillCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_SkillStatus =>
  [13,"Element #13","Graphics\\Windows\\Window_SkillStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_SkillList =>
  [14,"Element #14","Graphics\\Windows\\Window_SkillList",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_EquipStatus =>
  [15,"Element #15","Graphics\\Windows\\Window_EquipStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_EquipCommand =>
  [16,"Element #16","Graphics\\Windows\\Window_EquipCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_EquipSlot =>
  [17,"Element #17","Graphics\\Windows\\Window_EquipSlot",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_EquipItem =>
  [18,"Element #18","Graphics\\Windows\\Window_EquipItem",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_Status =>
  [19,"Element #19","Graphics\\Windows\\Window_Status",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_SaveFile =>
  [20,"Element #20","Graphics\\Windows\\Window_SaveFile",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ShopCommand =>
  [21,"Element #21","Graphics\\Windows\\Window_ShopCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ShopBuy =>
  [22,"Element #22","Graphics\\Windows\\Window_ShopBuy",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ShopSell =>
  [23,"Element #23","Graphics\\Windows\\Window_ShopSell",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ShopNumber =>
  [24,"Element #24","Graphics\\Windows\\Window_ShopNumber",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ShopStatus =>
  [25,"Element #25","Graphics\\Windows\\Window_ShopStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_NameEdit =>
  [26,"Element #26","Graphics\\Windows\\Window_NameEdit",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_NameInput =>
  [27,"Element #27","Graphics\\Windows\\Window_NameInput",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ChoiceList =>
  [28,"Element #28","Graphics\\Windows\\Window_ChoiceList",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_NumberInput =>
  [29,"Element #29","Graphics\\Windows\\Window_NumberInput",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_KeyItem =>
  [30,"Element #30","Graphics\\Windows\\Window_KeyItem",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_Message =>
  [31,"Element #31","Graphics\\Windows\\Window_Message",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ScrollText =>
  [32,"Element #32","Graphics\\Windows\\Window_ScrollText",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_MapName =>
  [33,"Element #33","Graphics\\Windows\\Window_MapName",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_BattleLog =>
  [34,"Element #34","Graphics\\Windows\\Window_BattleLog",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_PartyCommand =>
  [35,"Element #35","Graphics\\Windows\\Window_PartyCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_ActorCommand =>
  [36,"Element #36","Graphics\\Windows\\Window_ActorCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_BattleStatus =>
  [37,"Element #37","Graphics\\Windows\\Window_BattleStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_BattleActor =>
  [38,"Element #38","Graphics\\Windows\\Window_BattleActor",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_BattleEnemy =>
  [39,"Element #39","Graphics\\Windows\\Window_BattleEnemy",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_BattleSkill =>
  [40,"Element #40","Graphics\\Windows\\Window_BattleSkill",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_BattleItem =>
  [41,"Element #41","Graphics\\Windows\\Window_BattleItem",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_TitleCommand =>
  [42,"Element #42","Graphics\\Windows\\Window_TitleCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_GameEnd =>
  [43,"Element #43","Graphics\\Windows\\Window_GameEnd",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_DebugLeft =>
  [44,"Element #44","Graphics\\Windows\\Window_DebugLeft",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  Window_DebugRight =>
  [45,"Element #45","Graphics\\Windows\\Window_DebugRight",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  }  #Add more elements here

  Number_Of_Element = 46 #Modify this number as more elements are added

  Starting_Switch_Point = 500 #Modify this number if script clash with other script(s)
end
#==============================================================================
# Cache
#==============================================================================
module Cache
  def self.cache_extended(folder, filename)
    load_bitmap("#{folder}/", "#{filename}")
  end
end
#==============================================================================
# Window
#==============================================================================
class Window

  attr_accessor :oh_I_got_changed
  attr_accessor :michael_background_viewport_101
  alias michael_Window_initialize initialize
  def initialize(x, y, width, height)                  #Gotta love hidden script!
    michael_Window_initialize(x, y, width, height)
    self.oh_I_got_changed = false
    create_michael_background_viewport_101_102_103_104
    create_michael_background_sprite_101
  end

  def create_michael_background_viewport_101_102_103_104 #Naming convention ftw
    @michael_background_viewport_101 = Viewport.new      #The only locations where new member functions are created
    @michael_background_viewport_101.z = self.z - 1      #are class Window, class Sprite, module Cache
end                                                      #and class Game_Interpreter. Everything else is aliased.

  def create_michael_background_sprite_101
    @michael_self_background_ftw_101 = Sprite.new
  end

  alias michael_Window_update update
  def update
    michael_Window_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, $game_message.michael_windows_background_ftw_101[self.class])
  end

  alias michael_Window_dispose dispose                 #Everything is disposed here
  def dispose                                          #Basically every window made,
    michael_Window_dispose                             #1 viewport and 1 sprite are also made
    @michael_background_viewport_101.dispose
    @michael_self_background_ftw_101.dispose
  end

  def did_I_get_changed?
    return self.oh_I_got_changed
  end

  def change_me_by_michael
    self.oh_I_got_changed = true
  end
end
#==============================================================================
# Window_Base
#==============================================================================
class Window_Base < Window
  alias michael_Window_Base_show show
  alias michael_Window_Base_hide hide
  def show
    michael_Window_Base_show
    @michael_self_background_ftw_101.visible = true
    self
  end
  def hide
    michael_Window_Base_hide
    @michael_self_background_ftw_101.visible = false
    self
  end
end
#==============================================================================
# Sprite
#==============================================================================
class Sprite                                      #Another hidden script ftw!
  def michael_window_background_sprite(window, i)
    ($game_switches[Windows_Changer::Starting_Switch_Point + i[0]]) michael_bg_switch_on(window,i) : michael_bg_switch_off(window, i)
  end

  def michael_bg_switch_on(window, i)
    michael_set_self_vp(window)
    michael_save_wndw_opa(window) unless window.did_I_get_changed?
    michael_clear_wndw_opa(window)
    michael_set_self_properties(window, i)
    michael_modify_self(i) unless i[5] == 'false'
  end

  def michael_set_self_vp(window)
    self.viewport = (window.viewport) ? window.viewport : window.michael_background_viewport_101
  end

  def michael_save_wndw_opa(window)
    @michael_wndw_b_opa = window.back_opacity unless window.back_opacity.nil?
    @michael_wndw_opa = window.opacity unless window.opacity.nil?
  end

  def michael_clear_wndw_opa(window)
    window.back_opacity = 0 unless window.back_opacity.nil?
    window.opacity = 0 unless window.opacity.nil?
    window.change_me_by_michael
  end

  def michael_set_self_properties(window, i)
    self.x = window.x
    self.y = window.y
    self.src_rect.width = window.width
    self.src_rect.height = window.height
    self.visible = ((window.openness == 255) && (window.visible))
    #This is where picture is loaded
    name = i[1]
    folder = i[2]
    self.bitmap = Cache.cache_extended(folder, name)
    self.z += i[3] unless i[3].nil?
    self.opacity = i[4] if (self.visible) && !(i[4].nil?)
  end

  def michael_modify_self(i)
    case String(i[5])
    when 'show_all'
      self.x -= ((self.bitmap.width - window.width) / 2)
      self.src_rect.x = 0 if self.x < 0
      self.y -= ((self.bitmap.height - window.height) / 2)
      self.src_rect.y = 0 if self.y < 0
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height
    when 'move'
      self.x += (i[6] - ((self.bitmap.width - window.width) / 2))
      self.src_rect.x = 0 if self.x < 0
      self.y += (i[7] - ((self.bitmap.height - window.height) / 2))
      self.src_rect.y = 0 if self.y < 0
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height
    when 'move_origin'
      self.x += i[6]
      self.src_rect.x = 0 if self.x < 0
      self.y += i[7]
      self.src_rect.y = 0 if self.y < 0
    when 'center'
      self.x = (Graphics.width - self.bitmap.width) / 2
      self.src_rect.x = 0 if self.x < 0
      self.y = (Graphics.height - self.bitmap.height) / 2
      self.src_rect.y = 0 if self.y < 0
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height
    when 'move_all'
      self.x = i[6]
      self.y = i[7]
      self.src_rect.x = i[8]
      self.src_rect.y = i[9]
      self.src_rect.width = i[10]
      self.src_rect.height = i[11]
    end
  end

  #This will return window to default opacity after window_off
  def michael_bg_switch_off(window, i)
    self.visible = false
    window.oh_I_got_changed = false
    if ((window.openness == 255) && window.visible)
      window.back_opacity = @michael_wndw_b_opa unless @michael_wndw_b_opa.nil?
      window.opacity = @michael_wndw_opa unless @michael_wndw_opa.nil?
    end
  end

end
=begin #Scene_Base, Scene_Save, and Scene_File are left out for unnecessary process
#==============================================================================
# Scene_Base
#==============================================================================
class Scene_Base
  alias michael_Scene_Base_start start
  def start
    michael_Scene_Base_start
    update_all_windows
  end
end
=end
#==============================================================================
# Scene_Title
#==============================================================================
class Scene_Title < Scene_Base
  alias michael_Scene_Title_start start
  def start
    michael_Scene_Title_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Map
#==============================================================================
class Scene_Map < Scene_Base
  alias michael_Scene_Map_start start
  def start
    michael_Scene_Map_start
    update_all_windows
  end
end
#==============================================================================
# Scene_MenuBase
#==============================================================================
class Scene_MenuBase < Scene_Base
  alias michael_Scene_MenuBase_start start
  def start
    michael_Scene_MenuBase_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Menu
#==============================================================================
class Scene_Menu < Scene_MenuBase
  alias michael_Scene_Menu_start start
  def start
    michael_Scene_Menu_start
    update_all_windows
  end
end
#==============================================================================
# Scene_ItemBase
#==============================================================================
class Scene_ItemBase < Scene_MenuBase
  alias michael_Scene_ItemBase_start start
  def start
    michael_Scene_ItemBase_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Item
#==============================================================================
class Scene_Item < Scene_ItemBase
  alias michael_Scene_Item_start start
  def start
    michael_Scene_Item_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Skill
#==============================================================================
class Scene_Skill < Scene_ItemBase
  alias michael_Scene_Skill_start start
  def start
    michael_Scene_Skill_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Equip
#==============================================================================
class Scene_Equip < Scene_MenuBase
  alias michael_Scene_Equip_start start
  def start
    michael_Scene_Equip_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Status
#==============================================================================
class Scene_Status < Scene_MenuBase
  alias michael_Scene_Status_start start
  def start
    michael_Scene_Status_start
    update_all_windows
  end
end
#==============================================================================
# Scene_File
#==============================================================================
class Scene_File < Scene_MenuBase
  alias michael_Scene_File_start start
  def start
    michael_Scene_File_start
    update_all_windows
  end
end
#==============================================================================
# Scene_End
#==============================================================================
class Scene_End < Scene_MenuBase
  alias michael_Scene_End_start start
  def start
    michael_Scene_End_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Shop
#==============================================================================
class Scene_Shop < Scene_MenuBase
  alias michael_Scene_Shop_start start
  def start
    michael_Scene_Shop_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Name
#==============================================================================
class Scene_Name < Scene_MenuBase
  alias michael_Scene_Name_start start
  def start
    michael_Scene_Name_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Debug
#==============================================================================
class Scene_Debug < Scene_MenuBase
  alias michael_Scene_Debug_start start
  def start
    michael_Scene_Debug_start
    update_all_windows
  end
end
#==============================================================================
# Scene_Battle
#==============================================================================
class Scene_Battle < Scene_Base
  alias michael_Scene_Battle_start start
  def start
    michael_Scene_Battle_start
    update_all_windows
  end
end
#==============================================================================
# Game_Message
#==============================================================================
class Game_Message
  attr_accessor :michael_windows_background_ftw_101
  alias michael_initialize initialize
  def initialize
    michael_initialize
    @michael_windows_background_ftw_101 =
    Windows_Changer::Michael_Windows_Background_ftw_101_Array
  end
end
#==============================================================================
# Creating Directory
#==============================================================================
module DataManager
  class << self
    alias michael_data_manager_101_init init
  end
  def self.init
    michael_data_manager_101_init
    create_Windows_Changer_directory
  end
  def self.create_Windows_Changer_directory
    Windows_Changer::Michael_Windows_Background_ftw_101_Array.each_value {|value| Dir.mkdir(value[2]) if !File.exists?(value[2])}
  end
end
#===============================================================================
# DataManager
#===============================================================================
module DataManager
  class << self
   alias michael_Scene_Battle_create_game_objects create_game_objects
  end
  def self.create_game_objects
    michael_Scene_Battle_create_game_objects
    #Default setting = false
    $game_switches[Windows_Changer::Starting_Switch_Point...Windows_Changer::Starting_Switch_Point + Windows_Changer::Number_Of_Element] = false
  end
end
#===============================================================================
# Game Interpreter
#===============================================================================
class Game_Interpreter
  def window_off(i)
    $game_switches[i + Windows_Changer::Starting_Switch_Point] = false
  end
  def window_on(i, name, type_movement = 'false')
    $game_switches[i + Windows_Changer::Starting_Switch_Point] = true
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[1] = "#{name}"  if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[5] = String(type_movement) if value[0] == i
    } if String(type_movement) == 'false' || 'show_all' || 'center'
  end
  def window_depth(i, depth)
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[3] = depth if value[0] == i
    }
  end
  def window_opacity(i, opacity)
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[4] = opacity if value[0] == i
    }
  end
  def window_default(i)
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[3] = nil if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[4] = nil if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[5] = 'false' if value[0] == i
    }
  end
  def window_show_all(i)
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[5] = 'show_all' if value[0] == i
    }
  end
  def window_show_all_move(i, x, y)
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[5] = 'move' if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[6] = x if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[7] = y if value[0] == i
    }
  end
  def window_move_origin(i,x,y)
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[5] = 'move_origin' if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[6] = x if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[7] = y if value[0] == i
    }
  end
  def window_center(i)
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[5] = 'center' if value[0] == i
    }
  end
  def window_move_all(i, x, y, rect_x, rect_y, rect_width, rect_height)
    #Feeling pro, sir?
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[5] = 'move_all'if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[6] = x if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[7] = y if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[8] = rect_x if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[9] = rect_y if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[10] = rect_width if value[0] == i
    }
    $game_message.michael_windows_background_ftw_101.each_value {
      |value| value[11] = rect_height if value[0] == i
    }
  end
end
