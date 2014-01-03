#==============================================================================
#
# Michael Windows Changer
# Last Updated: 2014.01.02
# Requirement: RPG Maker VX Ace
#             -Knowledge of 'how to use scripts'
#             -Knowledge of Window Designation (basically know which window is
#              which)
#
#==============================================================================

#==============================================================================
#Compability: - Script should be compatible with other scripts.
#             - If the picture you use doesn't have the right size as the
#               window's size, then use window_move to show picture in full size.
#             - Bitmap cannot convert .gif file yet.
#
#==============================================================================


#==============================================================================
#  Biography lol
#==============================================================================
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
# - This script will OVERLOAD all windows.
# - This script will OVERLOAD all DEFAULT windows.
# - Place this script to be below other overloading windows script. If you are
#   not sure where, place it to be the lowest of the material section.
# - If you have a bust script, put the bust script anywhere below this script.
# - Place the window Images (by default) in that folder
#   <your project>/Graphics/Windows/(type of windows)/
#
#==============================================================================
# How to Use:
#  There are 3 commands so far (More would be added in the future)
#  - window_on(window #, 'file_name.extention_name')
#  For Example:
#  window_on(5, 'ex.jpg') -> activate window #5 background(window_gold_changer)
#                            with ex.jpg as the content
#                         -> Btw, window #5 is Window_Gold
#  - window_change(window #, 'file_name.extention_name')
#  For Example:
#  window_change(5, 'new.jpg') -> Change the window #5 background content with
#                                 new.jpg
#                              -> Make sure that switch is 'on' or else nothing
#                                 would happen.
#
#  - window_off(window #)
#  For Example:
#  window_off(5) -> deactivate window #5 background and its content
#                -> deactivating will hide the background and return the
#                   window rectangle back to the boring blue color with its
#                   redundant white padding.
#
#  - window_center(i)
#  For Example:
#  window_center(5) -> Move the window #5 background content to center position
#                       Default position is at the center (0,0) of the graphic and
#                       occupy the size of the graphic (if your picture has size
#                       larger than the graphic (580 x 444), it will fill the graphic)
#                    -> Make sure that switch is 'on' or else nothing would happen.
#
#  - window_move(i, x, y, width, height)
#  For Example:
#  window_move(5, 24, -24, 400, 400)
#  -> TIPS: If you are not sure how to adjust, the coordinate, starts with
#           window_center first.
#  -> move the window #5 background content to (24,-24) position. Remember that
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
#  window_default(5) -> Turn off movement switch for window #5 background
#                    -> This will return window #5 to the original position
#
#  - window_depth(i, depth)
#  For Example:
#  window_depth(5, -1) -> Increases the depthness of window #5 background content
#                         by -1, which means, if there's other window background
#                         in the graphic beside window #5 background, that window
#                         background will appear to be above window #5 background.
#                      -> Make sure that switch is 'on' or else nothing would happen.
#
# - window_opacity(i, opacity)
# For Example:
# window_opacity(5, 0) -> Set window #5 background opacity to 0 (100% transparent).
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
  #============================================================================
  Windows_Changer_Array = [
  Default_Window_This_is_Extra_Do_Not_Delete_Unless_You_Know_What_You_Do =
  "Element #0", #Don't tweak this one for the sake of harmony :D
  window_Selectable_Changer =
  "Element #1",
  window_Command_Changer =
  "Element #2",
  window_HorzCommand_Changer =
  "Element #3",
  window_Help_Changer =
  "Element #4",
  window_Gold_Changer =
  "Element #5",
  window_MenuCommand_Changer =
  "Element #6",
  window_MenuStatus_Changer =
  "Element #7",
  window_MenuActor_Changer =
  "Element #8",
  window_ItemCategory_Changer =
  "Element #9",
  window_ItemList_Changer =
  "Element #10",
  window_SkillCommand_Changer =
  "Element #11",
  window_SkillStatus_Changer =
  "Element #12",
  window_SkillList_Changer =
  "Element #13",
  window_EquipStatus_Changer =
  "Element #14",
  window_EquipCommand_Changer =
  "Element #15",
  window_EquipSlot_Changer =
  "Element #16",
  window_EquipItem_Changer =
  "Element #17",
  window_Status_Changer =
  "Element #18",
  window_SaveFile_Changer =
  "Element #19",
  window_ShopCommand_Changer =
  "Element #20",
  window_ShopBuy_Changer =
  "Element #21",
  window_ShopSell_Changer =
  "Element #22",
  window_ShopNumber_Changer =
  "Element #23",
  window_ShopStatus_Changer =
  "Element #24",
  window_NameEdit_Changer =
  "Element #25",
  window_NameInput_Changer =
  "Element #26",
  window_ChoiceList_Changer =
  "Element #27",
  window_NumberInput_Changer =
  "Element #28",
  window_KeyItem_Changer =
  "Element #29",
  window_Message_Changer =
  "Element #30",
  window_ScrollText_Changer =
  "Element #31",
  window_MapName_Changer =
  "Element #32",
  window_BattleLog_Changer =
  "Element #33",
  window_PartyCommand_Changer =
  "Element #34",
  window_ActorCommand_Changer =
  "Element #35",
  window_BattleStatus_Changer =
  "Element #36",
  window_BattleActor_Changer =
  "Element #37",
  window_BattleEnemy_Changer =
  "Element #38",
  window_BattleSkill_Changer =
  "Element #39",
  window_BattleItem_Changer =
  "Element #40",
  window_TitleCommand_Changer =
  "Element #41",
  window_GameEnd_Changer =
  "Element #42",
  window_DebugLeft_Changer =
  "Element #43",
  window_DebugRight_Changer =
  "Element #44",
  window_Base_Changer =
  "Element #45",
  ]  #Add more elements here

  Number_Of_Element = 46 #Modify this number as more elements are added

  Starting_Switch_Point = 100 #Modify this number if script clash with other script(s)

  #============================================================================
  # Windows Folder - This is where the folders are
  #============================================================================
  Windows_Changer_Folder_Array = [
  Windows_Folder = "Graphics\\Windows",
  Window_Selectable_Folder = "Graphics\\Windows\\Window_Selectable",
  Window_Command_Folder = "Graphics\\Windows\\Window_Command",
  Window_HorzCommand_Folder = "Graphics\\Windows\\Window_HorzCommand",
  Window_Help_Folder = "Graphics\\Windows\\Window_Help",
  Window_Gold_Folder = "Graphics\\Windows\\Window_Gold",
  Window_MenuCommand_Folder = "Graphics\\Windows\\Window_MenuCommand",
  Window_MenuStatus_Folder = "Graphics\\Windows\\Window_MenuStatus",
  Window_MenuActor_Folder = "Graphics\\Windows\\Window_MenuActor",
  Window_ItemCategory_Folder = "Graphics\\Windows\\Window_ItemCategory",
  Window_ItemList_Folder = "Graphics\\Windows\\Window_ItemList",
  Window_SkillCommand_Folder = "Graphics\\Windows\\Window_SkillCommand",
  Window_SkillStatus_Folder = "Graphics\\Windows\\Window_SkillStatus",
  Window_SkillList_Folder = "Graphics\\Windows\\Window_SkillList",
  Window_EquipStatus_Folder = "Graphics\\Windows\\Window_EquipStatus",
  Window_EquipCommand_Folder = "Graphics\\Windows\\Window_EquipCommand",
  Window_EquipSlot_Folder = "Graphics\\Windows\\Window_EquipSlot",
  Window_EquipItem_Folder = "Graphics\\Windows\\Window_EquipItem",
  Window_Status_Folder = "Graphics\\Windows\\Window_Status",
  Window_SaveFile_Folder = "Graphics\\Windows\\Window_SaveFile",
  Window_ShopCommand_Folder = "Graphics\\Windows\\Window_ShopCommand",
  Window_ShopBuy_Folder = "Graphics\\Windows\\Window_ShopBuy",
  Window_ShopSell_Folder = "Graphics\\Windows\\Window_ShopSell",
  Window_ShopNumber_Folder = "Graphics\\Windows\\Window_ShopNumber",
  Window_ShopStatus_Folder = "Graphics\\Windows\\Window_ShopStatus",
  Window_NameEdit_Folder = "Graphics\\Windows\\Window_NameEdit",
  Window_NameInput_Folder = "Graphics\\Windows\\Window_NameInput",
  Window_ChoiceList_Folder = "Graphics\\Windows\\Window_ChoiceList",
  Window_NumberInput_Folder = "Graphics\\Windows\\Window_NumberInput",
  Window_KeyItem_Folder = "Graphics\\Windows\\Window_KeyItem",
  Window_Message_Folder = "Graphics\\Windows\\Window_Message",
  Window_ScrollText_Folder = "Graphics\\Windows\\Window_ScrollText",
  Window_MapName_Folder = "Graphics\\Windows\\Window_MapName",
  Window_BattleLog_Folder = "Graphics\\Windows\\Window_BattleLog",
  Window_PartyCommand_Folder = "Graphics\\Windows\\Window_PartyCommand",
  Window_ActorCommand_Folder = "Graphics\\Windows\\Window_ActorCommand",
  Window_BattleStatus_Folder = "Graphics\\Windows\\Window_BattleStatus",
  Window_BattleActor_Folder = "Graphics\\Windows\\Window_BattleActor",
  Window_BattleEnemy_Folder = "Graphics\\Windows\\Window_BattleEnemy",
  Window_BattleSkill_Folder = "Graphics\\Windows\\Window_BattleSkill",
  Window_BattleItem_Folder = "Graphics\\Windows\\Window_BattleItem",
  Window_TitleCommand_Folder = "Graphics\\Windows\\Window_TitleCommand",
  Window_GameEnd_Folder = "Graphics\\Windows\\Window_GameEnd",
  Window_DebugLeft_Folder = "Graphics\\Windows\\Window_DebugLeft",
  Window_DebugRight_Folder = "Graphics\\Windows\\Window_DebugRight",
  Window_Base_Folder = "Graphics\\Windows\\Window_Base",
  ] #Add more elements here

  #============================================================================
  # Windows Position - This is To Adjust The Position of The Background Windows
  #============================================================================
  Windows_Changer_Position_Array = [
  Windows_Position = [0,0,Graphics.width,Graphics.height],
  Window_Selectable_Position = [0,0,Graphics.width,Graphics.height],
  Window_Command_Position = [0,0,Graphics.width,Graphics.height],
  Window_HorzCommand_Position = [0,0,Graphics.width,Graphics.height],
  Window_Help_Position = [0,0,Graphics.width,Graphics.height],
  Window_Gold_Position = [0,0,Graphics.width,Graphics.height],
  Window_MenuCommand_Position = [0,0,Graphics.width,Graphics.height],
  Window_MenuStatus_Position = [0,0,Graphics.width,Graphics.height],
  Window_MenuActor_Position = [0,0,Graphics.width,Graphics.height],
  Window_ItemCategory_Position = [0,0,Graphics.width,Graphics.height],
  Window_ItemList_Position = [0,0,Graphics.width,Graphics.height],
  Window_SkillCommand_Position = [0,0,Graphics.width,Graphics.height],
  Window_SkillStatus_Position = [0,0,Graphics.width,Graphics.height],
  Window_SkillList_Position = [0,0,Graphics.width,Graphics.height],
  Window_EquipStatus_Position = [0,0,Graphics.width,Graphics.height],
  Window_EquipCommand_Position = [0,0,Graphics.width,Graphics.height],
  Window_EquipSlot_Position = [0,0,Graphics.width,Graphics.height],
  Window_EquipItem_Position = [0,0,Graphics.width,Graphics.height],
  Window_Status_Position = [0,0,Graphics.width,Graphics.height],
  Window_SaveFile_Position = [0,0,Graphics.width,Graphics.height],
  Window_ShopCommand_Position = [0,0,Graphics.width,Graphics.height],
  Window_ShopBuy_Position = [0,0,Graphics.width,Graphics.height],
  Window_ShopSell_Position = [0,0,Graphics.width,Graphics.height],
  Window_ShopNumber_Position = [0,0,Graphics.width,Graphics.height],
  Window_ShopStatus_Position = [0,0,Graphics.width,Graphics.height],
  Window_NameEdit_Position = [0,0,Graphics.width,Graphics.height],
  Window_NameInput_Position = [0,0,Graphics.width,Graphics.height],
  Window_ChoiceList_Position = [0,0,Graphics.width,Graphics.height],
  Window_NumberInput_Position = [0,0,Graphics.width,Graphics.height],
  Window_KeyItem_Position = [0,0,Graphics.width,Graphics.height],
  Window_Message_Position = [0,0,Graphics.width,Graphics.height],
  Window_ScrollText_Position = [0,0,Graphics.width,Graphics.height],
  Window_MapName_Position = [0,0,Graphics.width,Graphics.height],
  Window_BattleLog_Position = [0,0,Graphics.width,Graphics.height],
  Window_PartyCommand_Position = [0,0,Graphics.width,Graphics.height],
  Window_ActorCommand_Position = [0,0,Graphics.width,Graphics.height],
  Window_BattleStatus_Position = [0,0,Graphics.width,Graphics.height],
  Window_BattleActor_Position = [0,0,Graphics.width,Graphics.height],
  Window_BattleEnemy_Position = [0,0,Graphics.width,Graphics.height],
  Window_BattleSkill_Position = [0,0,Graphics.width,Graphics.height],
  Window_BattleItem_Position = [0,0,Graphics.width,Graphics.height],
  Window_TitleCommand_Position = [0,0,Graphics.width,Graphics.height],
  Window_GameEnd_Position = [0,0,Graphics.width,Graphics.height],
  Window_DebugLeft_Position = [0,0,Graphics.width,Graphics.height],
  Window_DebugRight_Position = [0,0,Graphics.width,Graphics.height],
  Window_Base_Position = [0,0,Graphics.width,Graphics.height],
  ] #Add more elements here

  #============================================================================
  # Windows Depth - This is To Adjust The Depth of The Background Windows
  #============================================================================
  Windows_Changer_Depth_Array = [
  Windows_Depth = 0,
  Window_Selectable_Depth = 0,
  Window_Command_Depth = 0,
  Window_HorzCommand_Depth = 0,
  Window_Help_Depth = 0,
  Window_Gold_Depth = 0,
  Window_MenuCommand_Depth = 0,
  Window_MenuStatus_Depth = 0,
  Window_MenuActor_Depth = 0,
  Window_ItemCategory_Depth = 0,
  Window_ItemList_Depth = 0,
  Window_SkillCommand_Depth = 0,
  Window_SkillStatus_Depth = 0,
  Window_SkillList_Depth = 0,
  Window_EquipStatus_Depth = 0,
  Window_EquipCommand_Depth = 0,
  Window_EquipSlot_Depth = 0,
  Window_EquipItem_Depth = 0,
  Window_Status_Depth = 0,
  Window_SaveFile_Depth = 0,
  Window_ShopCommand_Depth = 0,
  Window_ShopBuy_Depth = 0,
  Window_ShopSell_Depth = 0,
  Window_ShopNumber_Depth = 0,
  Window_ShopStatus_Depth = 0,
  Window_NameEdit_Depth = 0,
  Window_NameInput_Depth = 0,
  Window_ChoiceList_Depth = 0,
  Window_NumberInput_Depth = 0,
  Window_KeyItem_Depth = 0,
  Window_Message_Depth = 0,
  Window_ScrollText_Depth = 0,
  Window_MapName_Depth = 0,
  Window_BattleLog_Depth = 0,
  Window_PartyCommand_Depth = 0,
  Window_ActorCommand_Depth = 0,
  Window_BattleStatus_Depth = 0,
  Window_BattleActor_Depth = 0,
  Window_BattleEnemy_Depth = 0,
  Window_BattleSkill_Depth = 0,
  Window_BattleItem_Depth = 0,
  Window_TitleCommand_Depth = 0,
  Window_GameEnd_Depth = 0,
  Window_DebugLeft_Depth = 0,
  Window_DebugRight_Depth = 0,
  Window_Base_Depth = 0,
  ] #Add more elements here

  #============================================================================
  # Windows Opacity - This is To Adjust The Opacity of The Background Windows
  #============================================================================
  Windows_Changer_Opacity_Array = [
  Windows_Opacity = [false, 255],
  Window_Selectable_Opacity = [false, 255],
  Window_Command_Opacity = [false, 255],
  Window_HorzCommand_Opacity = [false, 255],
  Window_Help_Opacity = [false, 255],
  Window_Gold_Opacity = [false, 255],
  Window_MenuCommand_Opacity = [false, 255],
  Window_MenuStatus_Opacity = [false, 255],
  Window_MenuActor_Opacity = [false, 255],
  Window_ItemCategory_Opacity = [false, 255],
  Window_ItemList_Opacity = [false, 255],
  Window_SkillCommand_Opacity = [false, 255],
  Window_SkillStatus_Opacity = [false, 255],
  Window_SkillList_Opacity = [false, 255],
  Window_EquipStatus_Opacity = [false, 255],
  Window_EquipCommand_Opacity = [false, 255],
  Window_EquipSlot_Opacity = [false, 255],
  Window_EquipItem_Opacity = [false, 255],
  Window_Status_Opacity = [false, 255],
  Window_SaveFile_Opacity = [false, 255],
  Window_ShopCommand_Opacity = [false, 255],
  Window_ShopBuy_Opacity = [false, 255],
  Window_ShopSell_Opacity = [false, 255],
  Window_ShopNumber_Opacity = [false, 255],
  Window_ShopStatus_Opacity = [false, 255],
  Window_NameEdit_Opacity = [false, 255],
  Window_NameInput_Opacity = [false, 255],
  Window_ChoiceList_Opacity = [false, 255],
  Window_NumberInput_Opacity = [false, 255],
  Window_KeyItem_Opacity = [false, 255],
  Window_Message_Opacity = [false, 255],
  Window_ScrollText_Opacity = [false, 255],
  Window_MapName_Opacity = [false, 255],
  Window_BattleLog_Opacity = [false, 255],
  Window_PartyCommand_Opacity = [false, 255],
  Window_ActorCommand_Opacity = [false, 255],
  Window_BattleStatus_Opacity = [false, 255],
  Window_BattleActor_Opacity = [false, 255],
  Window_BattleEnemy_Opacity = [false, 255],
  Window_BattleSkill_Opacity = [false, 255],
  Window_BattleItem_Opacity = [false, 255],
  Window_TitleCommand_Opacity = [false, 255],
  Window_GameEnd_Opacity = [false, 255],
  Window_DebugLeft_Opacity = [false, 255],
  Window_DebugRight_Opacity = [false, 255],
  Window_Base_Opacity = [false, 255],
  ] #Add more elements here
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
  alias michael_Window_initialize initialize
  def initialize(x, y, width, height)
    michael_Window_initialize(x, y, width, height)
    self.oh_I_got_changed = false
    create_michael_background_viewport_101
    create_michael_background_sprite_101
  end

  def create_michael_background_viewport_101
    @michael_background_viewport_101 = Viewport.new
    @michael_background_viewport_101.z = self.z - 1
  end

  def create_michael_background_sprite_101
    @michael_self_background_ftw_101 = Sprite.new
  end

  alias michael_Window_dispose dispose
  def dispose
    michael_Window_dispose
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
  def initialize(x, y, width, height)
    michael_Window_Base_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 45) if String(self.class) == 'Window_Base'
  end

  alias michael_Window_Base_show show
  def show
    michael_Window_Base_show
    @michael_self_background_ftw_101.visible = true
    self
  end

  alias michael_Window_Base_hide hide
  def hide
    michael_Window_Base_hide
    @michael_self_background_ftw_101.visible = false
    self
  end

  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_Base_update update
    def update
      michael_Window_Base_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 45) if String(self.class) == 'Window_Base'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 45) if String(self.class) == 'Window_Base'
    end
  end
end
#==============================================================================
# Window_Selectable
#==============================================================================
class Window_Selectable < Window_Base
  alias michael_Window_Selectable_initialize initialize
  def initialize(x, y, width, height)
    michael_Window_Selectable_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 1) if String(self.class) == 'Window_Selectable'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_Selectable_update update
    def update
      michael_Window_Selectable_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 1) if String(self.class) == 'Window_Selectable'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 1) if String(self.class) == 'Window_Selectable'
    end
  end
end
#==============================================================================
# Window_Command
#==============================================================================
class Window_Command < Window_Selectable
  alias michael_Window_Command_initialize initialize
  def initialize(x, y)
    michael_Window_Command_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 2) if String(self.class) == 'Window_Command'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_Command_update update
    def update
      michael_Window_Command_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 2) if String(self.class) == 'Window_Command'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 2) if String(self.class) == 'Window_Command'
    end
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
  def initialize(line_number = 2)
    michael_Window_Help_initialize(line_number = 2)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 4) if String(self.class) == 'Window_Help'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_Help_update update
    def update
      michael_Window_Help_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 4) if String(self.class) == 'Window_Help'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 4) if String(self.class) == 'Window_Help'
    end
  end
end
#==============================================================================
#  Window_Gold
#==============================================================================
class Window_Gold < Window_Base
  alias michael_Window_Gold_initialize initialize
  def initialize
    michael_Window_Gold_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 5) if String(self.class) == 'Window_Gold'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_Gold_update update
    def update
      michael_Window_Gold_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 5) if String(self.class) == 'Window_Gold'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 5) if String(self.class) == 'Window_Gold'
    end
  end
end
#==============================================================================
# Window_MenuCommand
#==============================================================================
class Window_MenuCommand < Window_Command
  alias michael_Window_MenuCommand_initialize initialize
  def initialize
    michael_Window_MenuCommand_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 6) if String(self.class) == 'Window_MenuCommand'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_MenuCommand_update update
    def update
      michael_Window_MenuCommand_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 6) if String(self.class) == 'Window_MenuCommand'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 6) if String(self.class) == 'Window_MenuCommand'
    end
  end
end
#==============================================================================
# Window_MenuStatus
#==============================================================================
class Window_MenuStatus < Window_Selectable
  alias michael_Window_MenuStatus_initialize initialize
  def initialize(x, y)
    michael_Window_MenuStatus_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 7) if String(self.class) == 'Window_MenuStatus'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_MenuStatus_update update
    def update
      michael_Window_MenuStatus_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 7) if String(self.class) == 'Window_MenuStatus'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 7) if String(self.class) == 'Window_MenuStatus'
    end
  end
end
#==============================================================================
# Window_MenuActor
#==============================================================================
class Window_MenuActor < Window_MenuStatus
  alias michael_Window_MenuActor_initialize initialize
  def initialize
    michael_Window_MenuActor_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 8) if String(self.class) == 'Window_MenuActor'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_MenuActor_update update
    def update
      michael_Window_MenuActor_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 8) if String(self.class) == 'Window_MenuActor'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 8) if String(self.class) == 'Window_MenuActor'
    end
  end
end
#==============================================================================
# Window_ItemCategory
#==============================================================================
class Window_ItemCategory < Window_HorzCommand
  alias michael_Window_ItemCategory_initialize initialize
  def initialize
    michael_Window_ItemCategory_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 9) if String(self.class) == 'Window_ItemCategory'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ItemCategory_update update
    def update
      michael_Window_ItemCategory_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 9) if String(self.class) == 'Window_ItemCategory'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 9) if String(self.class) == 'Window_ItemCategory'
    end
  end
end
#==============================================================================
# Window_ItemList
#==============================================================================
class Window_ItemList < Window_Selectable
  alias michael_Window_ItemList_initialize initialize
  def initialize(x, y, width, height)
    michael_Window_ItemList_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 10) if String(self.class) == 'Window_ItemList'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ItemList_update update
    def update
      michael_Window_ItemList_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 10) if String(self.class) == 'Window_ItemList'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 10) if String(self.class) == 'Window_ItemList'
    end
  end
end
#==============================================================================
# Window_SkillCommand
#==============================================================================
class Window_SkillCommand < Window_Command
  alias michael_Window_SkillCommand_initialize initialize
  def initialize(x, y)
    michael_Window_SkillCommand_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 11) if String(self.class) == 'Window_SkillCommand'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_SkillCommand_update update
    def update
      michael_Window_SkillCommand_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 11) if String(self.class) == 'Window_SkillCommand'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 11) if String(self.class) == 'Window_SkillCommand'
    end
  end
end
#==============================================================================
# Window_SkillStatus
#==============================================================================
class Window_SkillStatus < Window_Base
  alias michael_Window_SkillStatus_initialize initialize
  def initialize(x, y)
    michael_Window_SkillStatus_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 12)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_SkillStatus_update update
    def update
      michael_Window_SkillStatus_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 12)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 12)
    end
  end
end
#==============================================================================
# Window_SkillList
#==============================================================================
class Window_SkillList < Window_Selectable
  alias michael_Window_SkillList_initialize initialize
  def initialize(x, y, width, height)
    michael_Window_SkillList_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 13)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_SkillList_update update
    def update
      michael_Window_SkillList_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 13)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 13)
    end
  end
end
#==============================================================================
# Window_EquipStatus
#==============================================================================
class Window_EquipStatus < Window_Base
  alias michael_Window_EquipStatus_initialize initialize
  def initialize(x, y)
    michael_Window_EquipStatus_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 14)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_EquipStatus_update update
    def update
      michael_Window_EquipStatus_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 14)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 14)
    end
  end
end
#==============================================================================
# Window_EquipCommand
#==============================================================================
class Window_EquipCommand < Window_HorzCommand
  alias michael_Window_EquipCommand_initialize initialize
  def initialize(x, y, width)
    michael_Window_EquipCommand_initialize(x, y, width)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 15)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_EquipCommand_update update
    def update
      michael_Window_EquipCommand_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 15)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 15)
    end
  end
end
#==============================================================================
# Window_EquipSlot
#==============================================================================
class Window_EquipSlot < Window_Selectable
  alias michael_Window_EquipSlot_initialize initialize
  def initialize(x, y, width)
    michael_Window_EquipSlot_initialize(x, y, width)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 16)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_EquipSlot_update update
    def update
      michael_Window_EquipSlot_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 16)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 16)
    end
  end
end
#==============================================================================
# Window_EquipItem
#==============================================================================
class Window_EquipItem < Window_ItemList
  alias michael_Window_EquipItem_initialize initialize
  def initialize(x, y, width, height)
    michael_Window_EquipItem_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 17)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_EquipItem_update update
    def update
      michael_Window_EquipItem_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 17)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 17)
    end
  end
end
#==============================================================================
# Window_Status
#==============================================================================
class Window_Status < Window_Selectable
  alias michael_Window_Status_initialize initialize
  def initialize(actor)
    michael_Window_Status_initialize(actor)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 18)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_Status_update update
    def update
      michael_Window_Status_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 18)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 18)
    end
  end
end
#==============================================================================
# Window_SaveFile
#==============================================================================
class Window_SaveFile < Window_Base
  alias michael_Window_SaveFile_initialize initialize
  def initialize(height, index)
    michael_Window_SaveFile_initialize(height, index)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 19)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_SaveFile_update update
    def update
      michael_Window_SaveFile_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 19)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 19)
    end
  end
end
#==============================================================================
# Window_ShopCommand
#==============================================================================
class Window_ShopCommand < Window_HorzCommand
  alias michael_Window_ShopCommand_initialize initialize
  def initialize(window_width, purchase_only)
    michael_Window_ShopCommand_initialize(window_width, purchase_only)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 20)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ShopCommand_update update
    def update
      michael_Window_ShopCommand_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 20)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 20)
    end
  end
end
#==============================================================================
# Window_ShopBuy
#==============================================================================
class Window_ShopBuy < Window_Selectable
  alias michael_Window_ShopBuy_initialize initialize
  def initialize(x, y, height, shop_goods)
    michael_Window_ShopBuy_initialize(x, y, height, shop_goods)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 21)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ShopBuy_update update
    def update
      michael_Window_ShopBuy_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 21)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 21)
    end
  end
end
#==============================================================================
# Window_ShopSell
#==============================================================================
class Window_ShopSell < Window_ItemList
  alias michael_Window_ShopSell_initialize initialize
  def initialize(x, y, width, height)
    michael_Window_ShopSell_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 22)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ShopSell_update update
    def update
      michael_Window_ShopSell_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 22)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 22)
    end
  end
end
#==============================================================================
# Window_ShopNumber
#==============================================================================
class Window_ShopNumber < Window_Selectable
  alias michael_Window_ShopNumber_initialize initialize
  def initialize(x, y, height)
    michael_Window_ShopNumber_initialize(x, y, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 23)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ShopNumber_update update
    def update
      michael_Window_ShopNumber_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 23)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 23)
    end
  end
end
#==============================================================================
# Window_ShopStatus
#==============================================================================
class Window_ShopStatus < Window_Base
  alias michael_Window_ShopStatus_initialize initialize
  def initialize(x, y, width, height)
    michael_Window_ShopStatus_initialize(x, y, width, height)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 24)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ShopStatus_update update
    def update
      michael_Window_ShopStatus_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 24)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 24)
    end
  end
end
#==============================================================================
# Window_NameEdit
#==============================================================================
class Window_NameEdit < Window_Base
  alias michael_Window_NameEdit_initialize initialize
  def initialize(actor, max_char)
    michael_Window_NameEdit_initialize(actor, max_char)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 25)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_NameEdit_update update
    def update
      michael_Window_NameEdit_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 25)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 25)
    end
  end
end
#==============================================================================
# Window_NameInput
#==============================================================================
class Window_NameInput < Window_Selectable
  alias michael_Window_NameInput_initialize initialize
  def initialize(edit_window)
    michael_Window_NameInput_initialize(edit_window)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 26)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_NameInput_update update
    def update
      michael_Window_NameInput_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 26)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 26)
    end
  end
end
#==============================================================================
# Window_ChoiceList
#==============================================================================
class Window_ChoiceList < Window_Command
  alias michael_Window_ChoiceList_initialize initialize
  def initialize(message_window)
    michael_Window_ChoiceList_initialize(message_window)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 27)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ChoiceList_update update
    def update
      michael_Window_ChoiceList_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 27)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 27)
    end
  end
end
#==============================================================================
# Window_NumberInput
#==============================================================================
class Window_NumberInput < Window_Base
  alias michael_Window_NumberInput_initialize initialize
  def initialize(message_window)
    michael_Window_NumberInput_initialize(message_window)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 28)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_NumberInput_update update
    def update
      michael_Window_NumberInput_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 28)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 28)
    end
  end
end
#==============================================================================
# Window_KeyItem
#==============================================================================
class Window_KeyItem < Window_ItemList
  alias michael_Window_KeyItem_initialize initialize
  def initialize(message_window)
    michael_Window_KeyItem_initialize(message_window)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 29)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_KeyItem_update update
    def update
      michael_Window_KeyItem_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 29)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 29)
    end
  end
end
#==============================================================================
# Window_Message
#==============================================================================
class Window_Message < Window_Base
  alias michael_Window_Message_initialize initialize
  def initialize
    michael_Window_Message_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 30) if String(self.class) == 'Window_Message'
    @gold_window.update
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_Message_update update
    def update
      michael_Window_Message_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 30) if String(self.class) == 'Window_Message'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 30) if String(self.class) == 'Window_Message'
    end
  end
end
#==============================================================================
# Window_ScrollText
#==============================================================================
class Window_ScrollText < Window_Base
  alias michael_Window_ScrollText_initialize initialize
  def initialize
    michael_Window_ScrollText_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 31)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ScrollText_update update
    def update
      michael_Window_ScrollText_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 31)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 31)
    end
  end
end
#==============================================================================
# Window_MapName
#==============================================================================
class Window_MapName < Window_Base
  alias michael_Window_MapName_initialize initialize
  def initialize
    michael_Window_MapName_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 32)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_MapName_update update
    def update
      michael_Window_MapName_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 32)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 32)
    end
  end
end
#==============================================================================
# Window_BattleLog
#==============================================================================
class Window_BattleLog < Window_Selectable
  alias michael_Window_BattleLog_initialize initialize
  def initialize
    michael_Window_BattleLog_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 33)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_BattleLog_update update
    def update
      michael_Window_BattleLog_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 33)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 33)
    end
  end
end
#==============================================================================
# Window_PartyCommand
#=========================-====================================================
class Window_PartyCommand < Window_Command
  alias michael_Window_PartyCommand_initialize initialize
  def initialize
    michael_Window_PartyCommand_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 34)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_PartyCommand_update update
    def update
      michael_Window_PartyCommand_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 34)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 34)
    end
  end
end
#==============================================================================
# Window_ActorCommand
#==============================================================================
class Window_ActorCommand < Window_Command
  alias michael_Window_ActorCommand_initialize initialize
  def initialize
    michael_Window_ActorCommand_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 35)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_ActorCommand_update update
    def update
      michael_Window_ActorCommand_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 35)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 35)
    end
  end
end
#==============================================================================
# Window_BattleStatus
#==============================================================================
class Window_BattleStatus < Window_Selectable
  alias michael_Window_BattleStatus_initialize initialize
  def initialize
    michael_Window_BattleStatus_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 36) if String(self.class) == 'Window_BattleStatus'
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_BattleStatus_update update
    def update
      michael_Window_BattleStatus_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 36) if String(self.class) == 'Window_BattleStatus'
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 36) if String(self.class) == 'Window_BattleStatus'
    end
  end
end
#==============================================================================
# Window_BattleActor
#==============================================================================
class Window_BattleActor < Window_BattleStatus
  alias michael_Window_BattleActor_initialize initialize
  def initialize(info_viewport)
    michael_Window_BattleActor_initialize(info_viewport)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 37)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_BattleActor_update update
    def update
      michael_Window_BattleActor_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 37)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 37)
    end
  end
end
#==============================================================================
# Window_BattleEnemy
#==============================================================================
class Window_BattleEnemy < Window_Selectable
  alias michael_Window_BattleEnemy_initialize initialize
  def initialize(info_viewport)
    michael_Window_BattleEnemy_initialize(info_viewport)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 38)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_BattleEnemy_update update
    def update
      michael_Window_BattleEnemy_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 38)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 38)
    end
  end
end
#==============================================================================
# Window_BattleSkill
#==============================================================================
class Window_BattleSkill < Window_SkillList
  alias michael_Window_BattleSkill_initialize initialize
  def initialize(help_window, info_viewport)
    michael_Window_BattleSkill_initialize(help_window, info_viewport)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 39)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_BattleSkill_update update
    def update
      michael_Window_BattleSkill_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 39)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 39)
    end
  end
end
#==============================================================================
# Window_BattleItem
#==============================================================================
class Window_BattleItem < Window_ItemList
  alias michael_Window_BattleItem_initialize initialize
  def initialize(help_window, info_viewport)
    michael_Window_BattleItem_initialize(help_window, info_viewport)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 40)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_BattleItem_update update
    def update
      michael_Window_BattleItem_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 40)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 40)
    end
  end
end
#==============================================================================
# Window_TitleCommand
#==============================================================================
class Window_TitleCommand < Window_Command
  alias michael_Window_TitleCommand_initialize initialize
  def initialize
    michael_Window_TitleCommand_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 41)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_TitleCommand_update update
    def update
      michael_Window_TitleCommand_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 41)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 41)
    end
  end
end
#==============================================================================
# Window_GameEnd
#==============================================================================
class Window_GameEnd < Window_Command
  alias michael_Window_GameEnd_initialize initialize
  def initialize
    michael_Window_GameEnd_initialize
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 42)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_GameEnd_update update
    def update
      michael_Window_GameEnd_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 42)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 42)
    end
  end
end
#==============================================================================
# Window_DebugLeft
#==============================================================================
class Window_DebugLeft < Window_Selectable
  alias michael_Window_DebugLeft_initialize initialize
  def initialize(x, y)
    michael_Window_DebugLeft_initialize(x, y)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 43)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_DebugLeft_update update
    def update
      michael_Window_DebugLeft_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 43)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 43)
    end
  end
end
#==============================================================================
# Window_DebugRight
#==============================================================================
class Window_DebugRight < Window_Selectable
  alias michael_Window_DebugRight_initialize initialize
  def initialize(x, y, width)
    michael_Window_DebugRight_initialize(x, y, width)
    @michael_self_background_ftw_101.michael_window_background_sprite(self, 44)
  end
  begin
    def update_checker_michael_101
      self.update
    end
    alias michael_Window_DebugRight_update update
    def update
      michael_Window_DebugRight_update
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 44)
    end
  rescue NoMethodError
    def update
      super
      @michael_self_background_ftw_101.michael_window_background_sprite(self, 44)
    end
  end
end



#==============================================================================
# Sprite
#==============================================================================
class Sprite
  def michael_window_background_sprite(window, i)
    if (__method__[0...7] == 48998564589.to_s(36))
      if $game_switches[Windows_Changer::Starting_Switch_Point + i]
        (window.viewport) ? self.viewport = window.viewport : self.viewport = @michael_background_viewport_101
        unless window.did_I_get_changed?
          @just_for_naming_convention_sake_saving_window_back_opacity = window.back_opacity unless window.back_opacity.nil?
          @just_for_naming_convention_sake_saving_window_opacity = window.opacity unless window.opacity.nil?
        end
        window.back_opacity = 0 unless window.back_opacity.nil?
        window.opacity = 0 unless window.opacity.nil?
        window.change_me_by_michael
        folder = $game_message.game_message_windows_folder[i]
        name = $game_message.game_windows_name[i]
        self.bitmap = Cache.cache_extended(folder, name)
        self.x = window.x
        self.y = window.y
        #@gold_window is such an attention-seeker
        #gonna tweak abit here.
        self.src_rect.width = window.width
        self.src_rect.height = window.height
        self.visible = ((window.openness == 255) && (window.visible))
        if self.visible && $game_message.game_windows_opacity[i][0]
          self.opacity = $game_message.game_windows_opacity[i][1]
        end
        self.z += $game_message.game_windows_depth[i]
        if $game_switches[Windows_Changer::Starting_Switch_Point + i + Windows_Changer::Number_Of_Element]
          self.src_rect.set($game_message.game_windows_position[i][0],
                            $game_message.game_windows_position[i][1],
                            $game_message.game_windows_position[i][2],
                            $game_message.game_windows_position[i][3])
        end
      else
        self.visible = false
        if ((window.openness == 255) && window.visible)
          unless @just_for_naming_convention_sake_saving_window_back_opacity.nil?
            window.back_opacity = @just_for_naming_convention_sake_saving_window_back_opacity
          end
          unless @just_for_naming_convention_sake_saving_window_opacity.nil?
          window.opacity = @just_for_naming_convention_sake_saving_window_opacity
          end
        #window.oh_I_got_changed = false
        end
      end
    end
  end
end
#==============================================================================
# Game_Message
#==============================================================================
class Game_Message

  #============================================================================
  # Default Windows
  #============================================================================

  attr_accessor :game_message_windows_folder
  attr_accessor :game_windows_name
  attr_accessor :game_windows_position
  attr_accessor :game_windows_depth
  attr_accessor :game_windows_opacity

  alias michael_initialize initialize

  def initialize
    michael_initialize
    @game_message_windows_folder =
    Windows_Changer::Windows_Changer_Folder_Array
    @game_windows_name =
    Windows_Changer::Windows_Changer_Array
    @game_windows_position =
    Windows_Changer::Windows_Changer_Position_Array
    @game_windows_depth =
    Windows_Changer::Windows_Changer_Depth_Array
    @game_windows_opacity =
    Windows_Changer::Windows_Changer_Opacity_Array
  end
end
#==============================================================================
# Creating Directory
#==============================================================================
module DataManager
  class << self
    alias michael_data_manager_101_init init
  end
  #--------------------------------------------------------------------------
  # Initialize Module
  #--------------------------------------------------------------------------
  def self.init
    michael_data_manager_101_init
    create_Windows_Changer_directory
  end

  def self.create_Windows_Changer_directory
    $game_message.game_message_windows_folder.each do |folder|
      Dir.mkdir(folder) if !File.exists?(folder)
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
    $game_switches[Windows_Changer::Starting_Switch_Point...Windows_Changer::Starting_Switch_Point +
    Windows_Changer::Number_Of_Element +
    Windows_Changer::Number_Of_Element] = false
  end
end
#===============================================================================
# Game Interpreter
#===============================================================================
class Game_Interpreter
  def window_off(i)
    $game_switches[i + Windows_Changer::Starting_Switch_Point] = false
  end
  def window_on(i, name)
    $game_switches[i + Windows_Changer::Starting_Switch_Point] = true
    $game_message.game_windows_name[i] = "#{name}"
  end
  def window_change(i, name)
    $game_message.game_windows_name[i] = "#{change}"
  end

  def window_default(i)
    $game_switches[i + Windows_Changer::Number_Of_Element + Windows_Changer::Starting_Switch_Point] = false
  end

  def window_center(i)
    $game_switches[i + Windows_Changer::Number_Of_Element + Windows_Changer::Starting_Switch_Point] = true
    $game_message.game_windows_position[i][0] = 0
    $game_message.game_windows_position[i][1] = 0
    $game_message.game_windows_position[i][2] = Graphics.width
    $game_message.game_windows_position[i][3] = Graphics.height

  end

  def window_move(i, x, y, width, height)
    $game_switches[i + Windows_Changer::Number_Of_Element + 100] = true
    $game_message.game_windows_position[i][0] = x
    $game_message.game_windows_position[i][1] = y
    $game_message.game_windows_position[i][2] = width
    $game_message.game_windows_position[i][3] = height
  end

  def window_depth(i, depth)
    $game_message.game_windows_depth[i] = depth
  end

  def window_opacity(i, opacity)
    $game_message.game_window_opacity[i][0] = true
    $game_message.game_window_opacity[i][1] = opacity
  end
end
