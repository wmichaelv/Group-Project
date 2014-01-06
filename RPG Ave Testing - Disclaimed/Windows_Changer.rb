#==============================================================================
#
# Michael Windows Changer
# Last Updated: 2014.01.05
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
#  Biography lol
#==============================================================================
# 2013.01.06 --Increaseeeeeeeeeeeeddddddd readibility. .______________________.
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
  Michael_Windows_Background_ftw_101_Array = [
  Window_Changer =
  ["Element #0","Graphics\\Windows",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_Base_Changer =
  ["Element #1","Graphics\\Windows\\Window_Base",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_Selectable_Changer =
  ["Element #2","Graphics\\Windows\\Window_Selectable",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_Command_Changer =
  ["Element #3","Graphics\\Windows\\Window_Command",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_HorzCommand_Changer =
  ["Element #4","Graphics\\Windows\\Window_HorzCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_Help_Changer =
  ["Element #5","Graphics\\Windows\\Window_Help",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_Gold_Changer =
  ["Element #6","Graphics\\Windows\\Window_Gold",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_MenuCommand_Changer =
  ["Element #7","Graphics\\Windows\\Window_MenuCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_MenuStatus_Changer =
  ["Element #8","Graphics\\Windows\\Window_MenuStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_MenuActor_Changer =
  ["Element #9","Graphics\\Windows\\Window_MenuActor",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ItemCategory_Changer =
  ["Element #10","Graphics\\Windows\\Window_ItemCategory",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ItemList_Changer =
  ["Element #11","Graphics\\Windows\\Window_ItemList",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_SkillCommand_Changer =
  ["Element #12","Graphics\\Windows\\Window_SkillCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_SkillStatus_Changer =
  ["Element #13","Graphics\\Windows\\Window_SkillStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_SkillList_Changer =
  ["Element #14","Graphics\\Windows\\Window_SkillList",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_EquipStatus_Changer =
  ["Element #15","Graphics\\Windows\\Window_EquipStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_EquipCommand_Changer =
  ["Element #16","Graphics\\Windows\\Window_EquipCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_EquipSlot_Changer =
  ["Element #17","Graphics\\Windows\\Window_EquipSlot",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_EquipItem_Changer =
  ["Element #18","Graphics\\Windows\\Window_EquipItem",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_Status_Changer =
  ["Element #19","Graphics\\Windows\\Window_Status",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_SaveFile_Changer =
  ["Element #20","Graphics\\Windows\\Window_SaveFile",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ShopCommand_Changer =
  ["Element #21","Graphics\\Windows\\Window_ShopCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ShopBuy_Changer =
  ["Element #22","Graphics\\Windows\\Window_ShopBuy",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ShopSell_Changer =
  ["Element #23","Graphics\\Windows\\Window_ShopSell",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ShopNumber_Changer =
  ["Element #24","Graphics\\Windows\\Window_ShopNumber",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ShopStatus_Changer =
  ["Element #25","Graphics\\Windows\\Window_ShopStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_NameEdit_Changer =
  ["Element #26","Graphics\\Windows\\Window_NameEdit",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_NameInput_Changer =
  ["Element #27","Graphics\\Windows\\Window_NameInput",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ChoiceList_Changer =
  ["Element #28","Graphics\\Windows\\Window_ChoiceList",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_NumberInput_Changer =
  ["Element #29","Graphics\\Windows\\Window_NumberInput",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_KeyItem_Changer =
  ["Element #30","Graphics\\Windows\\Window_KeyItem",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_Message_Changer =
  ["Element #31","Graphics\\Windows\\Window_Message",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ScrollText_Changer =
  ["Element #32","Graphics\\Windows\\Window_ScrollText",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_MapName_Changer =
  ["Element #33","Graphics\\Windows\\Window_MapName",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_BattleLog_Changer =
  ["Element #34","Graphics\\Windows\\Window_BattleLog",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_PartyCommand_Changer =
  ["Element #35","Graphics\\Windows\\Window_PartyCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_ActorCommand_Changer =
  ["Element #36","Graphics\\Windows\\Window_ActorCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_BattleStatus_Changer =
  ["Element #37","Graphics\\Windows\\Window_BattleStatus",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_BattleActor_Changer =
  ["Element #38","Graphics\\Windows\\Window_BattleActor",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_BattleEnemy_Changer =
  ["Element #39","Graphics\\Windows\\Window_BattleEnemy",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_BattleSkill_Changer =
  ["Element #40","Graphics\\Windows\\Window_BattleSkill",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_BattleItem_Changer =
  ["Element #41","Graphics\\Windows\\Window_BattleItem",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_TitleCommand_Changer =
  ["Element #42","Graphics\\Windows\\Window_TitleCommand",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_GameEnd_Changer =
  ["Element #43","Graphics\\Windows\\Window_GameEnd",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_DebugLeft_Changer =
  ["Element #44","Graphics\\Windows\\Window_DebugLeft",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  window_DebugRight_Changer =
  ["Element #45","Graphics\\Windows\\Window_DebugRight",nil,nil,'false',nil,nil,nil,nil,nil,nil],
  ]  #Add more elements here

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
  alias michael_Window_Base_initialize initialize
  alias michael_Window_Base_update update
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
  def initialize(x, y, width, height)
    michael_Window_Base_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 1) if String(self.class) == 'Window_Base'
  end
  def update
    michael_Window_Base_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 1) if String(self.class) == 'Window_Base'
  end
end
#==============================================================================
# Window_Selectable
#==============================================================================
class Window_Selectable < Window_Base
  alias michael_Window_Selectable_initialize initialize
  alias michael_Window_Selectable_update update
  def initialize(x, y, width, height)
    michael_Window_Selectable_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 2) if String(self.class) == 'Window_Selectable'
  end
  def update
    michael_Window_Selectable_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 2) if String(self.class) == 'Window_Selectable'
  end
end
#==============================================================================
# Window_Command
#==============================================================================
class Window_Command < Window_Selectable
  alias michael_Window_Command_initialize initialize
  alias michael_Window_Command_update update
  def initialize(x, y)
    michael_Window_Command_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 3) if String(self.class) == 'Window_Command'
  end
  def update
    michael_Window_Command_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 3) if String(self.class) == 'Window_Command'
  end
end
#==============================================================================
# Window_HorzCommand
#==============================================================================
class Window_HorzCommand < Window_Command
end #No initialize, so no need to overload
#==============================================================================
# Window_Help
#==============================================================================
class Window_Help < Window_Base
  alias michael_Window_Help_initialize initialize
  alias michael_Window_Help_update update
  def initialize(line_number = 2)
    michael_Window_Help_initialize(line_number = 2)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 5) if String(self.class) == 'Window_Help'
  end
  def update
    michael_Window_Help_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 5) if String(self.class) == 'Window_Help'
  end
end
#==============================================================================
#  Window_Gold
#==============================================================================
class Window_Gold < Window_Base
  alias michael_Window_Gold_initialize initialize
  alias michael_Window_Gold_update update
  def initialize
    michael_Window_Gold_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 6) if String(self.class) == 'Window_Gold'
  end
  def update
    michael_Window_Gold_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 6) if String(self.class) == 'Window_Gold'
  end
end
#==============================================================================
# Window_MenuCommand
#==============================================================================
class Window_MenuCommand < Window_Command
  alias michael_Window_MenuCommand_initialize initialize
  alias michael_Window_MenuCommand_update update
  def initialize
    michael_Window_MenuCommand_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 7) if String(self.class) == 'Window_MenuCommand'
  end
  def update
    michael_Window_MenuCommand_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 7) if String(self.class) == 'Window_MenuCommand'
  end
end
#==============================================================================
# Window_MenuStatus
#==============================================================================
class Window_MenuStatus < Window_Selectable
  alias michael_Window_MenuStatus_initialize initialize
  alias michael_Window_MenuStatus_update update
  def initialize(x, y)
    michael_Window_MenuStatus_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 8) if String(self.class) == 'Window_MenuStatus'
  end
  alias michael_Window_MenuStatus_update update
  def update
    michael_Window_MenuStatus_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 8) if String(self.class) == 'Window_MenuStatus'
  end
end
#==============================================================================
# Window_MenuActor
#==============================================================================
class Window_MenuActor < Window_MenuStatus
  alias michael_Window_MenuActor_initialize initialize
  alias michael_Window_MenuActor_update update
  def initialize
    michael_Window_MenuActor_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 9) if String(self.class) == 'Window_MenuActor'
  end
  def update
    michael_Window_MenuActor_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 9) if String(self.class) == 'Window_MenuActor'
  end
end
#==============================================================================
# Window_ItemCategory
#==============================================================================
class Window_ItemCategory < Window_HorzCommand
  alias michael_Window_ItemCategory_initialize initialize
  alias michael_Window_ItemCategory_update update
  def initialize
    michael_Window_ItemCategory_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 10) if String(self.class) == 'Window_ItemCategory'
  end
  def update
    michael_Window_ItemCategory_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 10) if String(self.class) == 'Window_ItemCategory'
  end
end
#==============================================================================
# Window_ItemList
#==============================================================================
class Window_ItemList < Window_Selectable
  alias michael_Window_ItemList_initialize initialize
  alias michael_Window_ItemList_update update
  def initialize(x, y, width, height)
    michael_Window_ItemList_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 11) if String(self.class) == 'Window_ItemList'
  end
  def update
    michael_Window_ItemList_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 11) if String(self.class) == 'Window_ItemList'
  end
end
#==============================================================================
# Window_SkillCommand
#==============================================================================
class Window_SkillCommand < Window_Command
  alias michael_Window_SkillCommand_initialize initialize
  alias michael_Window_SkillCommand_update update
  def initialize(x, y)
    michael_Window_SkillCommand_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 12) if String(self.class) == 'Window_SkillCommand'
  end
  def update
    michael_Window_SkillCommand_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 12) if String(self.class) == 'Window_SkillCommand'
  end
end
#==============================================================================
# Window_SkillStatus
#==============================================================================
class Window_SkillStatus < Window_Base
  alias michael_Window_SkillStatus_initialize initialize
  alias michael_Window_SkillStatus_update update
  def initialize(x, y)
    michael_Window_SkillStatus_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 13) if String(self.class) == 'Window_SkillStatus'
  end
  def update
    michael_Window_SkillStatus_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 13) if String(self.class) == 'Window_SkillStatus'
  end
end
#==============================================================================
# Window_SkillList
#==============================================================================
class Window_SkillList < Window_Selectable
  alias michael_Window_SkillList_initialize initialize
  alias michael_Window_SkillList_update update
  def initialize(x, y, width, height)
    michael_Window_SkillList_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 14) if String(self.class) == 'Window_SkillList'
  end
  def update
    michael_Window_SkillList_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 14) if String(self.class) == 'Window_SkillList'
  end
end
#==============================================================================
# Window_EquipStatus
#==============================================================================
class Window_EquipStatus < Window_Base
  alias michael_Window_EquipStatus_initialize initialize
  alias michael_Window_EquipStatus_update update
  def initialize(x, y)
    michael_Window_EquipStatus_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 15) if String(self.class) == 'Window_EquipStatus'
  end
  def update
    michael_Window_EquipStatus_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 15) if String(self.class) == 'Window_EquipStatus'
  end
end
#==============================================================================
# Window_EquipCommand
#==============================================================================
class Window_EquipCommand < Window_HorzCommand
  alias michael_Window_EquipCommand_initialize initialize
  alias michael_Window_EquipCommand_update update
  def initialize(x, y, width)
    michael_Window_EquipCommand_initialize(x, y, width)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 16) if String(self.class) == 'Window_EquipCommand'
  end
  def update
    michael_Window_EquipCommand_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 16) if String(self.class) == 'Window_EquipCommand'
  end
end
#==============================================================================
# Window_EquipSlot
#==============================================================================
class Window_EquipSlot < Window_Selectable
  alias michael_Window_EquipSlot_initialize initialize
  alias michael_Window_EquipSlot_update update
  def initialize(x, y, width)
    michael_Window_EquipSlot_initialize(x, y, width)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 17) if String(self.class) == 'Window_EquipSlot'
  end
  def update
    michael_Window_EquipSlot_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 17) if String(self.class) == 'Window_EquipSlot'
  end
end
#==============================================================================
# Window_EquipItem
#==============================================================================
class Window_EquipItem < Window_ItemList
  alias michael_Window_EquipItem_initialize initialize
  alias michael_Window_EquipItem_update update
  def initialize(x, y, width, height)
    michael_Window_EquipItem_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 18) if String(self.class) == 'Window_EquipItem'
  end
  def update
    michael_Window_EquipItem_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 18) if String(self.class) == 'Window_EquipItem'
  end
end
#==============================================================================
# Window_Status
#==============================================================================
class Window_Status < Window_Selectable
  alias michael_Window_Status_initialize initialize
  alias michael_Window_Status_update update
  def initialize(actor)
    michael_Window_Status_initialize(actor)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 19) if String(self.class) == 'Window_Status'
  end
  def update
    michael_Window_Status_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 19) if String(self.class) == 'Window_Status'
  end
end
#==============================================================================
# Window_SaveFile
#==============================================================================
class Window_SaveFile < Window_Base
  alias michael_Window_SaveFile_initialize initialize
  alias michael_Window_SaveFile_update update
  def initialize(height, index)
    michael_Window_SaveFile_initialize(height, index)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 20) if String(self.class) == 'Window_SaveFile'
  end
  def update
    michael_Window_SaveFile_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 20) if String(self.class) == 'Window_SaveFile'
  end
end
#==============================================================================
# Window_ShopCommand
#==============================================================================
class Window_ShopCommand < Window_HorzCommand
  alias michael_Window_ShopCommand_initialize initialize
  alias michael_Window_ShopCommand_update update
  def initialize(window_width, purchase_only)
    michael_Window_ShopCommand_initialize(window_width, purchase_only)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 21) if String(self.class) == 'Window_ShopCommand'
  end
  def update
    michael_Window_ShopCommand_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 21) if String(self.class) == 'Window_ShopCommand'
  end
end
#==============================================================================
# Window_ShopBuy
#==============================================================================
class Window_ShopBuy < Window_Selectable
  alias michael_Window_ShopBuy_initialize initialize
  alias michael_Window_ShopBuy_update update
  def initialize(x, y, height, shop_goods)
    michael_Window_ShopBuy_initialize(x, y, height, shop_goods)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 22) if String(self.class) == 'Window_ShopBuy'
  end
  def update
    michael_Window_ShopBuy_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 22) if String(self.class) == 'Window_ShopBuy'
  end
end
#==============================================================================
# Window_ShopSell
#==============================================================================
class Window_ShopSell < Window_ItemList
  alias michael_Window_ShopSell_initialize initialize
  alias michael_Window_ShopSell_update update
  def initialize(x, y, width, height)
    michael_Window_ShopSell_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 23) if String(self.class) == 'Window_ShopSell'
  end
  def update
    michael_Window_ShopSell_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 23) if String(self.class) == 'Window_ShopSell'
  end
end
#==============================================================================
# Window_ShopNumber
#==============================================================================
class Window_ShopNumber < Window_Selectable
  alias michael_Window_ShopNumber_initialize initialize
  alias michael_Window_ShopNumber_update update
  def initialize(x, y, height)
    michael_Window_ShopNumber_initialize(x, y, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 24) if String(self.class) == 'Window_ShopNumber'
  end
  def update
    michael_Window_ShopNumber_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 24) if String(self.class) == 'Window_ShopNumber'
  end
end
#==============================================================================
# Window_ShopStatus
#==============================================================================
class Window_ShopStatus < Window_Base
  alias michael_Window_ShopStatus_initialize initialize
  alias michael_Window_ShopStatus_update update
  def initialize(x, y, width, height)
    michael_Window_ShopStatus_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 25) if String(self.class) == 'Window_ShopStatus'
  end
  def update
    michael_Window_ShopStatus_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 25) if String(self.class) == 'Window_ShopStatus'
  end
end
#==============================================================================
# Window_NameEdit
#==============================================================================
class Window_NameEdit < Window_Base
  alias michael_Window_NameEdit_initialize initialize
  alias michael_Window_NameEdit_update update
  def initialize(actor, max_char)
    michael_Window_NameEdit_initialize(actor, max_char)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 26) if String(self.class) == 'Window_NameEdit'
  end
  def update
    michael_Window_NameEdit_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 26) if String(self.class) == 'Window_NameEdit'
  end
end
#==============================================================================
# Window_NameInput
#==============================================================================
class Window_NameInput < Window_Selectable
  alias michael_Window_NameInput_initialize initialize
  alias michael_Window_NameInput_update update
  def initialize(edit_window)
    michael_Window_NameInput_initialize(edit_window)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 27) if String(self.class) == 'Window_NameInput'
  end
  def update
    michael_Window_NameInput_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 27) if String(self.class) == 'Window_NameInput'
  end
end
#==============================================================================
# Window_ChoiceList
#==============================================================================
class Window_ChoiceList < Window_Command
  alias michael_Window_ChoiceList_initialize initialize
  alias michael_Window_ChoiceList_update update
  def initialize(message_window)
    michael_Window_ChoiceList_initialize(message_window)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 28) if String(self.class) == 'Window_ChoiceList'
  end
  def update
    michael_Window_ChoiceList_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 28) if String(self.class) == 'Window_ChoiceList'
  end
end
#==============================================================================
# Window_NumberInput
#==============================================================================
class Window_NumberInput < Window_Base
  alias michael_Window_NumberInput_initialize initialize
  alias michael_Window_NumberInput_update update
  def initialize(message_window)
    michael_Window_NumberInput_initialize(message_window)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 29) if String(self.class) == 'Window_NumberInput'
  end
  def update
    michael_Window_NumberInput_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 29) if String(self.class) == 'Window_NumberInput'
  end
end
#==============================================================================
# Window_KeyItem
#==============================================================================
class Window_KeyItem < Window_ItemList
  alias michael_Window_KeyItem_initialize initialize
  alias michael_Window_KeyItem_update update
  def initialize(message_window)
    michael_Window_KeyItem_initialize(message_window)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 30) if String(self.class) == 'Window_KeyItem'
  end
  def update
    michael_Window_KeyItem_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 30) if String(self.class) == 'Window_KeyItem'
  end
end
#==============================================================================
# Window_Message
#==============================================================================
class Window_Message < Window_Base
  alias michael_Window_Message_initialize initialize
  alias michael_Window_Message_update update
  def initialize
    michael_Window_Message_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 31) if String(self.class) == 'Window_Message'
    @gold_window.update             #I'm thinking of self.update if String(self.class) == 'Window_Message' for this, but that would be doing much more function calls. So yea!
  end
  def update
    michael_Window_Message_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 31) if String(self.class) == 'Window_Message'
  end
end
#==============================================================================
# Window_ScrollText
#==============================================================================
class Window_ScrollText < Window_Base
  alias michael_Window_ScrollText_initialize initialize
  alias michael_Window_ScrollText_update update
  def initialize
    michael_Window_ScrollText_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 32) if String(self.class) == 'Window_ScrollText'
  end
  def update
    michael_Window_ScrollText_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 32) if String(self.class) == 'Window_ScrollText'
  end
end
#==============================================================================
# Window_MapName
#==============================================================================
class Window_MapName < Window_Base
  alias michael_Window_MapName_initialize initialize
  alias michael_Window_MapName_update update
  def initialize
    michael_Window_MapName_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 33) if String(self.class) == 'Window_MapName'
  end
  def update
    michael_Window_MapName_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 33) if String(self.class) == 'Window_MapName'
  end
end
#==============================================================================
# Window_BattleLog
#==============================================================================
class Window_BattleLog < Window_Selectable
  alias michael_Window_BattleLog_initialize initialize
  alias michael_Window_BattleLog_update update
  def initialize
    michael_Window_BattleLog_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 34) if String(self.class) == 'Window_BattleLog'
  end
  def update
    michael_Window_BattleLog_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 34) if String(self.class) == 'Window_BattleLog'
  end
end
#==============================================================================
# Window_PartyCommand
#=========================-====================================================
class Window_PartyCommand < Window_Command
  alias michael_Window_PartyCommand_initialize initialize
  alias michael_Window_PartyCommand_update update
  def initialize
    michael_Window_PartyCommand_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 35) if String(self.class) == 'Window_PartyCommand'
  end
  def update
    michael_Window_PartyCommand_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 35) if String(self.class) == 'Window_PartyCommand'
  end
end
#==============================================================================
# Window_ActorCommand
#==============================================================================
class Window_ActorCommand < Window_Command
  alias michael_Window_ActorCommand_initialize initialize
  alias michael_Window_ActorCommand_update update
  def initialize
    michael_Window_ActorCommand_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 36) if String(self.class) == 'Window_ActorCommand'
  end
  def update
    michael_Window_ActorCommand_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 36) if String(self.class) == 'Window_ActorCommand'
  end
end
#==============================================================================
# Window_BattleStatus
#==============================================================================
class Window_BattleStatus < Window_Selectable
  alias michael_Window_BattleStatus_initialize initialize
  alias michael_Window_BattleStatus_update update
  def initialize
    michael_Window_BattleStatus_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 37) if String(self.class) == 'Window_BattleStatus'
  end
  def update
    michael_Window_BattleStatus_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 37) if String(self.class) == 'Window_BattleStatus'
  end
end
#==============================================================================
# Window_BattleActor
#==============================================================================
class Window_BattleActor < Window_BattleStatus
  alias michael_Window_BattleActor_initialize initialize
  alias michael_Window_BattleActor_update update
  def initialize(info_viewport)
    michael_Window_BattleActor_initialize(info_viewport)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 38) if String(self.class) == 'Window_BattleActor'
  end
  def update
    michael_Window_BattleActor_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 38) if String(self.class) == 'Window_BattleActor'
  end
end
#==============================================================================
# Window_BattleEnemy
#==============================================================================
class Window_BattleEnemy < Window_Selectable
  alias michael_Window_BattleEnemy_update update
  alias michael_Window_BattleEnemy_initialize initialize
  def initialize(info_viewport)
    michael_Window_BattleEnemy_initialize(info_viewport)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 39) if String(self.class) == 'Window_BattleEnemy'
  end
  def update
    michael_Window_BattleEnemy_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 39) if String(self.class) == 'Window_BattleEnemy'
  end
end
#==============================================================================
# Window_BattleSkill
#==============================================================================
class Window_BattleSkill < Window_SkillList
  alias michael_Window_BattleSkill_initialize initialize
  alias michael_Window_BattleSkill_update update
  def initialize(help_window, info_viewport)
    michael_Window_BattleSkill_initialize(help_window, info_viewport)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 40) if String(self.class) == 'Window_BattleSkill'
  end
  def update
    michael_Window_BattleSkill_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 40) if String(self.class) == 'Window_BattleSkill'
  end
end
#==============================================================================
# Window_BattleItem
#==============================================================================
class Window_BattleItem < Window_ItemList
  alias michael_Window_BattleItem_initialize initialize
  alias michael_Window_BattleItem_update update
  def initialize(help_window, info_viewport)
    michael_Window_BattleItem_initialize(help_window, info_viewport)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 41) if String(self.class) == 'Window_BattleItem'
  end
  def update
    michael_Window_BattleItem_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 41) if String(self.class) == 'Window_BattleItem'
  end
end
#==============================================================================
# Window_TitleCommand
#==============================================================================
class Window_TitleCommand < Window_Command
  alias michael_Window_TitleCommand_initialize initialize
  alias michael_Window_TitleCommand_update update
  def initialize
    michael_Window_TitleCommand_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 42) if String(self.class) == 'Window_TitleCommand'
  end
  def update
    michael_Window_TitleCommand_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 42) if String(self.class) == 'Window_TitleCommand'
  end
end
#==============================================================================
# Window_GameEnd
#==============================================================================
class Window_GameEnd < Window_Command
  alias michael_Window_GameEnd_initialize initialize
  alias michael_Window_GameEnd_update update
  def initialize
    michael_Window_GameEnd_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 43) if String(self.class) == 'Window_GameEnd'
  end
  def update
    michael_Window_GameEnd_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 43) if String(self.class) == 'Window_GameEnd'
  end
end
#==============================================================================
# Window_DebugLeft
#==============================================================================
class Window_DebugLeft < Window_Selectable
    alias michael_Window_DebugLeft_initialize initialize
    alias michael_Window_DebugLeft_update update
    def initialize(x, y)
      michael_Window_DebugLeft_initialize(x, y)
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 44) if String(self.class) == 'Window_DebugLeft'
    end
    def update
      michael_Window_DebugLeft_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 44) if String(self.class) == 'Window_DebugLeft'
    end
end
#==============================================================================
# Window_DebugRight
#==============================================================================
class Window_DebugRight < Window_Selectable
  alias michael_Window_DebugRight_initialize initialize
  alias michael_Window_DebugRight_update update
  def initialize(x, y, width)
    michael_Window_DebugRight_initialize(x, y, width)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 45) if String(self.class) == 'Window_DebugRight'
  end
  def update
    michael_Window_DebugRight_update
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 45) if String(self.class) == 'Window_DebugRight'
  end
end
#==============================================================================
# Sprite
#==============================================================================
class Sprite                                      #Another hidden script ftw!
  def michael_window_background_sprite(window, i)
    if __method__[0...7] == 48998564589.to_s(36)
      if $game_switches[Windows_Changer::Starting_Switch_Point + i]
        self.viewport = (window.viewport) ? window.viewport : window.michael_background_viewport_101
        unless window.did_I_get_changed?
          @just_for_naming_convention_sake_saving_window_back_opacity = window.back_opacity unless window.back_opacity.nil?
          @just_for_naming_convention_sake_saving_window_opacity = window.opacity unless window.opacity.nil?
        end
        window.back_opacity = 0 unless window.back_opacity.nil?
        window.opacity = 0 unless window.opacity.nil?
        window.change_me_by_michael
        self.x = window.x
        self.y = window.y
        self.src_rect.width = window.width
        self.src_rect.height = window.height
        self.visible = ((window.openness == 255) && (window.visible))
        #This is where picture is loaded
        name = $game_message.michael_windows_background_ftw_101[i][0]
        folder = $game_message.michael_windows_background_ftw_101[i][1]
        self.bitmap = Cache.cache_extended(folder, name)
        self.z += $game_message.michael_windows_background_ftw_101[i][2] unless $game_message.michael_windows_background_ftw_101[i][2].nil?
        self.opacity = $game_message.michael_windows_background_ftw_101[i][3] if (self.visible) && !($game_message.michael_windows_background_ftw_101[i][3].nil?)
        #This is where the sprite_movement comes into play
        case String($game_message.michael_windows_background_ftw_101[i][4])
        when 'false'
          #do nothing
        when 'show_all'
          self.x -= ((self.bitmap.width - window.width) / 2)
          self.src_rect.x = 0 if self.x < 0 #Muahahaha figured it out. Freakin' coordination won't show up if value is under 0. :D
          self.y -= ((self.bitmap.height - window.height) / 2)
          self.src_rect.y = 0 if self.y < 0
          self.src_rect.width = Graphics.width
          self.src_rect.height = Graphics.height
        when 'move'
          self.x += ($game_message.michael_windows_background_ftw_101[i][5] - ((self.bitmap.width - window.width) / 2))
          self.src_rect.x = 0 if self.x < 0
          self.y += ($game_message.michael_windows_background_ftw_101[i][6] - ((self.bitmap.height - window.height) / 2))
          self.src_rect.y = 0 if self.y < 0
          self.src_rect.width = Graphics.width
          self.src_rect.height = Graphics.height
        when 'move_origin'
            self.x += $game_message.michael_windows_background_ftw_101[i][5]
            self.src_rect.x = 0 if self.x < 0
            self.y += $game_message.michael_windows_background_ftw_101[i][6]
            self.src_rect.y = 0 if self.y < 0
        when 'center', 'move_all'
          self.x = $game_message.michael_windows_background_ftw_101[i][5]
          self.y = $game_message.michael_windows_background_ftw_101[i][6]
          self.src_rect.x = $game_message.michael_windows_background_ftw_101[i][7]
          self.src_rect.y = $game_message.michael_windows_background_ftw_101[i][8]
          self.src_rect.width = $game_message.michael_windows_background_ftw_101[i][9]
          self.src_rect.height = $game_message.michael_windows_background_ftw_101[i][10]
        end
      else
        #This will return window to default opacity after window_off
        self.visible = false
        if ((window.openness == 255) && window.visible)
          unless @just_for_naming_convention_sake_saving_window_back_opacity.nil?
            window.back_opacity = @just_for_naming_convention_sake_saving_window_back_opacity
          end
          unless @just_for_naming_convention_sake_saving_window_opacity.nil?
          window.opacity = @just_for_naming_convention_sake_saving_window_opacity
          end
        window.oh_I_got_changed = false
        end
      end
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
    Array.new(Windows_Changer::Number_Of_Element) do |i|
      Dir.mkdir($game_message.michael_windows_background_ftw_101[i][1]) if !File.exists?($game_message.michael_windows_background_ftw_101[i][1])
    end
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
    $game_message.michael_windows_background_ftw_101[i][0] = "#{name}"
    $game_message.michael_windows_background_ftw_101[i][4] = String(type_movement) if String(type_movement) == 'false' || 'show_all' || 'center'
  end
  def window_depth(i, depth)
    $game_message.michael_windows_background_ftw_101[i][2] = depth
  end
  def window_opacity(i, opacity)
    $game_message.michael_windows_background_ftw_101[i][3] = opacity
  end
  def window_default(i)
    $game_message.michael_windows_background_ftw_101[i][2] = nil
    $game_message.michael_windows_background_ftw_101[i][3] = nil
    $game_message.michael_windows_background_ftw_101[i][4] = 'false'
  end
  def window_show_all(i)
    $game_message.michael_windows_background_ftw_101[i][4] = 'show_all'
  end
  def window_show_all_move(i, x, y)
    $game_message.michael_windows_background_ftw_101[i][4] = 'move'
    $game_message.michael_windows_background_ftw_101[i][5] = x
    $game_message.michael_windows_background_ftw_101[i][6] = y
  end
  def window_move_origin(i,x,y)
    $game_message.michael_windows_background_ftw_101[i][4] = 'move_origin'
    $game_message.michael_windows_background_ftw_101[i][5] = x
    $game_message.michael_windows_background_ftw_101[i][6] = y
  end
  def window_center(i)
    $game_message.michael_windows_background_ftw_101[i][4] = 'center'
    $game_message.michael_windows_background_ftw_101[i][5] = 272
    $game_message.michael_windows_background_ftw_101[i][6] = 208
    $game_message.michael_windows_background_ftw_101[i][9] = Graphics.width
    $game_message.michael_windows_background_ftw_101[i][10] = Graphics.height
  end
  def window_move_all(i, x, y, rect_x, rect_y, rect_width, rect_height)
    #Feeling pro, sir?
    $game_message.michael_windows_background_ftw_101[i][4] = 'move_all'
    $game_message.michael_windows_background_ftw_101[i][5] = x
    $game_message.michael_windows_background_ftw_101[i][6] = y
    $game_message.michael_windows_background_ftw_101[i][7] = rect_x
    $game_message.michael_windows_background_ftw_101[i][8] = rect_y
    $game_message.michael_windows_background_ftw_101[i][9] = rect_width
    $game_message.michael_windows_background_ftw_101[i][10] = rect_height
  end
end
