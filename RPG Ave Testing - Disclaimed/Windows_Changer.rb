
#==============================================================================
#
# Michael Windows Changer
# Last Updated: 2013.12.27
# Requirement: RPG Maker VX Ace
#             -Knowledge of 'how to use scripts'
#             -Knowledge of Window Designation (basically know which window is
#              which)
#
#==============================================================================

#==============================================================================
#Compability: - Script should be compatible with other scripts.
#             - Make sure that the picture you use have the right size as the
#               window's size.
#             - Bitmap cannot convert .gif file yet.
#
#==============================================================================


#==============================================================================
#  Biography lol
#==============================================================================
# 2013.12.27 --Fixed window_default(i)
#            --window_depth(i, depth) is introduced & implemented
#            --Fixed window_default(i) and window_center(i) is introduced
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
  ]  #Add more windows here

  Number_Of_Element = 46

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
  ] #Add more windows here

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
  ] #Add more windows here

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
  ] #Add more windows here

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

  alias a_lias initialize

  def initialize
    a_lias
    @game_message_windows_folder =
    Windows_Changer::Windows_Changer_Folder_Array
    @game_windows_name =
    Windows_Changer::Windows_Changer_Array
    @game_windows_position =
    Windows_Changer::Windows_Changer_Position_Array
    @game_windows_depth =
    Windows_Changer::Windows_Changer_Depth_Array
  end
end


#==============================================================================
# Creating Directory
#==============================================================================
module DataManager
  class << self
    alias a_lias init
  end
  #--------------------------------------------------------------------------
  # Initialize Module
  #--------------------------------------------------------------------------
  def self.init
    a_lias
    create_Windows_Changer_directory
  end

  def self.create_Windows_Changer_directory
    $game_message.game_message_windows_folder.each do |folder|
      Dir.mkdir(folder) if !File.exists?(folder)
    end
  end
end

#==============================================================================
# Window_Message
#==============================================================================

class Window_Message < Window_Base

  alias michael_initialize initialize
  def initialize
    michael_initialize
    create_background_viewport_Window_Message
    create_background_Window_Message
  end

  def create_background_viewport_Window_Message
    @background_Window_Message_viewport = Viewport.new
    @background_Window_Message_viewport.z = 199
  end

  def create_background_Window_Message
    @temp1 = @gold_window.back_opacity
    @temp2 = @gold_window.opacity
    @gold_background = Sprite.new(@background_Window_Message_viewport)
    @gold_background.y = @gold_window.y
    @gold_background.x = @gold_window.x
    @gold_background.visible = false
    @choice_background = Sprite.new(@background_Window_Message_viewport)
    @choice_background.x = @choice_window.x
    @choice_background.y = @choice_window.y
    @number_background = Sprite.new(@background_Window_Message_viewport)
    @number_background.x = @number_window.x
    @number_background.y = @number_window.y
    @item_background = Sprite.new(@background_Window_Message_viewport)
    @item_background.x = @item_window.x
    @item_background.y = @item_window.y

  end

  alias michael_dispose dispose
  def dispose
    michael_dispose
    @gold_background.dispose
    @choice_background.dispose
    @number_background.dispose
    @item_background.dispose
    @background_Window_Message_viewport.dispose
  end


  alias michael_update update
  def update
    if $game_switches[105]
      @gold_window.back_opacity = 0
      @gold_window.opacity = 0
      folder = $game_message.game_gold_windows_folder[5]
      name = $game_message.game_windows_name[5]
      @gold_background.bitmap = Cache.cache_extended(folder, name)
      @gold_background.src_rect.width = @gold_window.width
      @gold_background.visible = true
      @gold_background.z += $game_message.game_windows_depth[5]
      if $game_switches[105 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[5][0],
                                        $game_message.game_windows_position[5][1],
                                        $game_message.game_windows_position[5][2],
                                        $game_message.game_windows_position[5][3])
      end
    else
      @gold_background.visible = false
    end
    if $game_switches[127]
      @choice_window.back_opacity = 0
      @choice_window.opacity = 0
      folder = $game_message.game_message_windows_folder[27]
      name = $game_message.game_windows_name[27]
      @choice_background.bitmap = Cache.cache_extended(folder, name)
      @choice_background.src_rect.width = @choice_window.width
      @choice_background.visible = true
      @choice_background.z += $game_message.game_windows_depth[27]
      if $game_switches[127 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[27][0],
                                        $game_message.game_windows_position[27][1],
                                        $game_message.game_windows_position[27][2],
                                        $game_message.game_windows_position[27][3])
      end
    else
      @choice_background.visible = false
    end
    if $game_switches[128]
      @number_window.back_opacity = 0
      @number_window.opacity = 0
      folder = $game_message.game_message_windows_folder[28]
      name = $game_message.game_windows_name[28]
      @number_background.bitmap = Cache.cache_extended(folder, name)
      @number_background.src_rect.width = @number_window.width
      @number_background.visible = true
      @number_background.z += $game_message.game_windows_depth[28]
      if $game_switches[128 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[28][0],
                                        $game_message.game_windows_position[28][1],
                                        $game_message.game_windows_position[28][2],
                                        $game_message.game_windows_position[28][3])
      end
    else
      @number_background.visible = false
    end
    if $game_switches[129]
      @item_window.back_opacity = 0
      @item_window.opacity = 0
      folder = $game_message.game_message_windows_folder[29]
      name = $game_message.game_windows_name[29]
      @item_background.bitmap = Cache.cache_extended(folder, name)
      @item_background.src_rect.width = @item_window.width
      @item_background.visible = true
      @item_background.z += $game_message.game_windows_depth[29]
      if $game_switches[129 + Windows_Changer::Number_Of_Element]
        @item_background.src_rect.set($game_message.game_windows_position[29][0],
                                      $game_message.game_windows_position[29][1],
                                      $game_message.game_windows_position[29][2],
                                      $game_message.game_windows_position[29][3])
      end
    else
      @item_background.visible = false
    end
    michael_update
  end



  #--------------------------------------------------------------------------
  # Main Processing of Fiber
  #--------------------------------------------------------------------------
  def fiber_main
    $game_message.visible = true
    update_background
    update_placement
    loop do
      process_all_text if $game_message.has_text?
      process_input
      $game_message.clear
      @gold_window.close
      @gold_background.visible = false
      Fiber.yield
      break unless text_continue?
    end
    close_and_wait
    $game_message.visible = false
    @fiber = nil
  end



  alias michael_update_placement update_placement
  def update_placement
    michael_update_placement
    @gold_background.y = @gold_window.y
  end

end

#==============================================================================
# Scene_Title
#==============================================================================

class Scene_Title < Scene_Base

  alias michael_create_command_window create_command_window
  def create_command_window
    michael_create_command_window
    @background_viewport = Viewport.new
    @background_viewport.z = 99
    @command_background = Sprite.new(@background_viewport)
    @command_background.x = @command_window.x
    #(Graphics.width - @command_window.width) / 2
    @command_background.y = @command_window.y
    #(Graphics.height - @command_window.fitting_height(@command_window.visible_line_number)) / 2

    if $game_switches[141]
      folder = $game_message.game_message_windows_folder[41]
      name = $game_message.game_windows_name[41]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.height = @command_window.height
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
      @command_window.opacity = 0
      @command_window.back_opacity = 0
      @command_background.z += $game_message.game_windows_depth[41]
    if $game_switches[141 + Windows_Changer::Number_Of_Element]
        @command_background.src_rect.set($game_message.game_windows_position[41][0],
                                         $game_message.game_windows_position[41][1],
                                         $game_message.game_windows_position[41][2],
                                         $game_message.game_windows_position[41][3])
      end
    end

  end

  alias michael_terminate terminate
  def terminate
    @command_background.dispose
    @background_viewport.dispose
    michael_terminate
  end

#Not sure if this even necessary
=begin
  def update
    super
    if $game_switches[141]
      folder = $game_message.game_message_windows_folder[41]
      name = $game_message.game_windows_name[41]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.z += $game_message.game_windows_depth[41]
      if $game_switches[141 + Windows_Changer::Number_Of_Element]
        @command_background.src_rect.set($game_message.game_windows_position[41][0],
                                         $game_message.game_windows_position[41][1],
                                         $game_message.game_windows_position[41][2],
                                         $game_message.game_windows_position[41][3])
      end
    end
  end
=end

  #--------------------------------------------------------------------------
  # Close Command Window
  #--------------------------------------------------------------------------
  alias michael_close_command_window close_command_window
  def close_command_window
    michael_close_command_window
    @command_background.visible = false
  end
end

#==============================================================================
# Scene_Map
#==============================================================================

class Scene_Map < Scene_Base

  alias michael_create_all_windows create_all_windows
  def create_all_windows
    michael_create_all_windows
    @background_Map_viewport = Viewport.new
    @background_Map_viewport.z = 199
    @temp1 = @message_window.back_opacity
    @temp2 = @message_window.opacity
    @message_background = Sprite.new(@background_Map_viewport)
    @message_background.y = @message_window.y
    @message_background.x = @message_window.x
    if $game_switches[130]
      @message_window.back_opacity = 0
      @message_window.opacity = 0
      folder = $game_message.game_message_windows_folder[30]
      name = $game_message.game_windows_name[30]
      @message_background.bitmap = Cache.cache_extended(folder, name)
      @message_background.src_rect.width = @message_window.width
      @message_background.visible = true
      @message_background.z += $game_message.game_windows_depth[30]
      if $game_switches[130 + Windows_Changer::Number_Of_Element]
        @message_background.src_rect.set($game_message.game_windows_position[30][0],
                                         $game_message.game_windows_position[30][1],
                                         $game_message.game_windows_position[30][2],
                                         $game_message.game_windows_position[30][3])
      end
    else
      @message_background.visible = false
    end
    @scroll_text_background = Sprite.new(@background_Map_viewport)
    @scroll_text_background.x = @scroll_text_window.x
    @scroll_text_background.y = @scroll_text_window.y
    if $game_switches[131]
      @scroll_text_window.back_opacity = 0
      @scroll_text_window.opacity = 0
      folder = $game_message.game_message_windows_folder[31]
      name = $game_message.game_windows_name[31]
      @scroll_text_background.bitmap = Cache.cache_extended(folder, name)
      @scroll_text_background.src_rect.width = @scroll_text_window.width
      @scroll_text_background.visible = true
      @scroll_text_background.z += $game_message.game_windows_depth[31]
      if $game_switches[131 + Windows_Changer::Number_Of_Element]
        @scroll_text_background.src_rect.set($game_message.game_windows_position[31][0],
                                             $game_message.game_windows_position[31][1],
                                             $game_message.game_windows_position[31][2],
                                             $game_message.game_windows_position[31][3])
      end
    else
      #Map is freezed when this is active
      #@scroll_text_window.back_opacity = @temp1
      #@scroll_text_window.opacity = @temp2
      @scroll_text_background.visible = false
    end
    @map_name_background = Sprite.new(@background_Map_viewport)
    @map_name_background.x = @map_name_window.x
    @map_name_background.y = @map_name_window.y
    if $game_switches[132]
      @map_name_window.back_opacity = 0
      @map_name_window.opacity = 0
      folder = $game_message.game_message_windows_folder[32]
      name = $game_message.game_windows_name[32]
      @map_name_background.bitmap = Cache.cache_extended(folder, name)
      @map_name_background.src_rect.width = @map_name_window.width
      @map_name_background.visible = true
      @map_name_background.z += $game_message.game_windows_depth[32]
      if $game_switches[132 + Windows_Changer::Number_Of_Element]
        @map_name_background.src_rect.set($game_message.game_windows_position[32][0],
                                          $game_message.game_windows_position[32][1],
                                          $game_message.game_windows_position[32][2],
                                          $game_message.game_windows_position[32][3])
      end
    else
      #@map_name_window.back_opacity = @temp1
      #@map_name_window.opacity = @temp2
      @map_name_background.visible = false
    end
  end

  alias michael_terminate terminate
  def terminate
    michael_terminate
    @message_background.dispose
    @scroll_text_background.dispose
    @map_name_background.dispose
    @background_Map_viewport.dispose
  end
end

#==============================================================================
# Scene_MenuBase
#==============================================================================

class Scene_MenuBase < Scene_Base
  #--------------------------------------------------------------------------
  # Create Help Window
  #--------------------------------------------------------------------------
  alias michael_create_help_window create_help_window
  def create_help_window
    michael_create_help_window
    @temp1 = @help_window.back_opacity
    @temp2 = @help_window.opacity
    @help_background = Sprite.new(@viewport)
    @help_background.z -= 1
    @help_background.x = @help_window.x
    @help_background.y = @help_window.y
    if $game_switches[104]
      @help_window.back_opacity = 0
      @help_window.opacity = 0
      folder = $game_message.game_message_windows_folder[4]
      name = $game_message.game_windows_name[4]
      @help_background.bitmap = Cache.cache_extended(folder, name)
      @help_background.src_rect.width = @help_window.width
      @help_background.visible = true
      @help_background.z += $game_message.game_windows_depth[4]
      if $game_switches[104 + Windows_Changer::Number_Of_Element]
        @help_background.src_rect.set($game_message.game_windows_position[4][0],
                                      $game_message.game_windows_position[4][1],
                                      $game_message.game_windows_position[4][2],
                                      $game_message.game_windows_position[4][3])
      end
    else
      @help_background.visible = false
    end
  end
end

#==============================================================================
# Scene_Menu
#==============================================================================

class Scene_Menu < Scene_MenuBase

  alias michael_create_command_window create_command_window
  def create_command_window
    michael_create_command_window
    @background_Menu_viewport = Viewport.new
    @background_Menu_viewport.z = 199
    @temp1 = @command_window.back_opacity
    @temp2 = @command_window.opacity
    @command_background = Sprite.new(@background_Menu_viewport)
    @command_background.y = @command_window.y
    @command_background.x = @command_window.x
    if $game_switches[106]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[6]
      name = $game_message.game_windows_name[6]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
      @command_background.z += $game_message.game_windows_depth[6]
      if $game_switches[106 + Windows_Changer::Number_Of_Element]
        @command_background.src_rect.set($game_message.game_windows_position[6][0],
                                         $game_message.game_windows_position[6][1],
                                         $game_message.game_windows_position[6][2],
                                         $game_message.game_windows_position[6][3])
      end
    else
      @command_window.back_opacity = @temp1
      @command_window.opacity = @temp2
      @command_background.visible = false
    end
  end

  alias michael_create_gold_window create_gold_window
  def create_gold_window
    michael_create_gold_window
    @gold_background = Sprite.new(@background_Menu_viewport)
    @gold_background.x = @gold_window.x
    @gold_background.y = @gold_window.y
    if $game_switches[105]
      @gold_window.back_opacity = 0
      @gold_window.opacity = 0
      folder = $game_message.game_message_windows_folder[5]
      name = $game_message.game_windows_name[5]
      @gold_background.bitmap = Cache.cache_extended(folder, name)
      @gold_background.src_rect.width = @gold_window.width
      @gold_background.visible = true
      @gold_background.z += $game_message.game_windows_depth[5]
      if $game_switches[105 + Windows_Changer::Number_Of_Element]
        @gold_background.src_rect.set($game_message.game_windows_position[5][0],
                                      $game_message.game_windows_position[5][1],
                                      $game_message.game_windows_position[5][2],
                                      $game_message.game_windows_position[5][3])
      end
    else
      @gold_window.back_opacity = @temp1
      @gold_window.opacity = @temp2
      @gold_background.visible = false
    end
  end

  alias michael_create_status_window create_status_window
  def create_status_window
    michael_create_status_window
    @status_background = Sprite.new(@background_Menu_viewport)
    @status_background.x = @status_window.x
    @status_background.y = @status_window.y
    if $game_switches[107]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[7]
      name = $game_message.game_windows_name[7]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
      @status_background.z += $game_message.game_windows_depth[7]
      if $game_switches[107 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[7][0],
                                        $game_message.game_windows_position[7][1],
                                        $game_message.game_windows_position[7][2],
                                        $game_message.game_windows_position[7][3])
      end
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      @command_background.dispose
      @gold_background.dispose
      @status_background.dispose
      @background_Menu_viewport.dispose
    end
  rescue NameError
    def terminate
      super
      @command_background.dispose
      @gold_background.dispose
      @status_background.dispose
      @background_Menu_viewport.dispose
    end
  end

=begin
  def update
    super
    if $game_switches[106]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[6]
      name = $game_message.game_windows_name[6]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
      @command_background.z += $game_message.game_windows_depth[6]
      if $game_switches[106 + Windows_Changer::Number_Of_Element]
        @command_background.src_rect.set($game_message.game_windows_position[6][0],
                                         $game_message.game_windows_position[6][1],
                                         $game_message.game_windows_position[6][2],
                                         $game_message.game_windows_position[6][3])
      end
    else
      @command_window.back_opacity = @temp1
      @command_window.opacity = @temp2
      @command_background.visible = false
    end
    if $game_switches[105]
      @gold_window.back_opacity = 0
      @gold_window.opacity = 0
      folder = $game_message.game_message_windows_folder[5]
      name = $game_message.game_windows_name[5]
      @gold_background.bitmap = Cache.cache_extended(folder, name)
      @gold_background.src_rect.width = @gold_window.width
      @gold_background.visible = true
      @gold_background.z += $game_message.game_windows_depth[5]
      if $game_switches[105 + Windows_Changer::Number_Of_Element]
        @gold_background.src_rect.set($game_message.game_windows_position[5][0],
                                      $game_message.game_windows_position[5][1],
                                      $game_message.game_windows_position[5][2],
                                      $game_message.game_windows_position[5][3])
      end
    else
      @gold_window.back_opacity = @temp1
      @gold_window.opacity = @temp2
      @gold_background.visible = false
    end
    if $game_switches[107]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[7]
      name = $game_message.game_windows_name[7]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
      @status_background.z += $game_message.game_windows_depth[7]
      if $game_switches[107 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[7][0],
                                        $game_message.game_windows_position[7][1],
                                        $game_message.game_windows_position[7][2],
                                        $game_message.game_windows_position[7][3])
      end
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
  end
=end
end

#==============================================================================
# Scene_ItemBase
#==============================================================================

class Scene_ItemBase < Scene_MenuBase

  alias michael_create_actor_window create_actor_window
  def create_actor_window
    michael_create_actor_window
    @background_ItemBase_viewport = Viewport.new
    @background_ItemBase_viewport.z = 198
    @actor_background = Sprite.new(@background_ItemBase_viewport)
    @actor_background.y = @actor_window.y
    @actor_background.x = @actor_window.x
    if $game_switches[108]
      folder = $game_message.game_message_windows_folder[8]
      name = $game_message.game_windows_name[8]
      @actor_background.bitmap = Cache.cache_extended(folder, name)
      @actor_background.src_rect.width = @actor_window.width
      @actor_background.visible = true
      @actor_window.opacity = 0
      @actor_window.back_opacity = 0
      @actor_background.z += $game_message.game_windows_depth[8]
      if $game_switches[108 + Windows_Changer::Number_Of_Element]
        @actor_background.src_rect.set($game_message.game_windows_position[8][0],
                                       $game_message.game_windows_position[8][1],
                                       $game_message.game_windows_position[8][2],
                                       $game_message.game_windows_position[8][3])
      end
    end
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      @actor_background.dispose
      @background_ItemBase_viewport.dispose
    end
  rescue NameError
    def terminate
      super
      @actor_background.dispose
      @background_ItemBase_viewport.dispose
    end
  end

=begin
  def update
    super
    if $game_switches[108]
      folder = $game_message.game_message_windows_folder[8]
      name = $game_message.game_windows_name[8]
      @actor_background.bitmap = Cache.cache_extended(folder, name)
      @actor_background.src_rect.width = @actor_window.width
      @actor_background.z += $game_message.game_windows_depth[8]
      if $game_switches[108 + Windows_Changer::Number_Of_Element]
        @actor_background.src_rect.set($game_message.game_windows_position[8][0],
                                       $game_message.game_windows_position[8][1],
                                       $game_message.game_windows_position[8][2],
                                       $game_message.game_windows_position[8][3])
      end
    end
  end
=end

  #--------------------------------------------------------------------------
  # Show Subwindow
  #--------------------------------------------------------------------------
  alias michael_show_sub_window show_sub_window
  def show_sub_window(window)
    michael_show_sub_window
    if $game_switches[108]
      @actor_background.visible = true
      @actor_window.opacity = 0
      @actor_window.back_opacity = 0
    else
      @actor_background.visible = false
      @actor_window.opacity = @temp1
      @actor_window.back_opacity = @temp2
    end
  end
end

#==============================================================================
# Scene_Item
#==============================================================================

class Scene_Item < Scene_ItemBase


  def create_help_window
    super
    @background_item_viewport = Viewport.new
    @background_item_viewport.z = 199
    @help_background.z = @background_item_viewport.z
    @help_background.z += $game_message.game_windows_depth[4]
    if $game_switches[104 + Windows_Changer::Number_Of_Element]
        @help_background.src_rect.set($game_message.game_windows_position[4][0],
                                      $game_message.game_windows_position[4][1],
                                      $game_message.game_windows_position[4][2],
                                      $game_message.game_windows_position[4][3])
    end
  end


  alias michael_create_category_window create_category_window
  def create_create_category_window
    michael_create_category_window
    @category_background = Sprite.new(@background_item_viewport)
    @category_background.x = @category_window.x
    @category_background.y = @category_window.y
    if $game_switches[109]
      @category_window.back_opacity = 0
      @category_window.opacity = 0
      folder = $game_message.game_message_windows_folder[9]
      name = $game_message.game_windows_name[9]
      @category_background.bitmap = Cache.cache_extended(folder, name)
      @category_background.src_rect.width = @category_window.width
      @category_background.visible = true
      @category_background.z += $game_message.game_windows_depth[9]
      if $game_switches[109 + Windows_Changer::Number_Of_Element]
        @category_background.src_rect.set($game_message.game_windows_position[9][0],
                                          $game_message.game_windows_position[9][1],
                                          $game_message.game_windows_position[9][2],
                                          $game_message.game_windows_position[9][3])
      end
    else
      @category_window.back_opacity = @temp1
      @category_window.opacity = @temp2
      @category_background.visible = false
    end
  end

  alias michael_create_item_window create_item_window
  def create_item_window
    michael_create_item_window
    @item_background = Sprite.new(@background_item_viewport)
    @item_background.x = 0#@item_window.x
    @item_background.y = 0#@item_window.y
    if $game_switches[110]
      @item_window.back_opacity = 0
      @item_window.opacity = 0
      folder = $game_message.game_message_windows_folder[10]
      name = $game_message.game_windows_name[10]
      @item_background.bitmap = Cache.cache_extended(folder, name)
      @item_background.src_rect.width = @item_window.width
      @item_background.visible = true
      @item_background.z += $game_message.game_windows_depth[10]
      if $game_switches[110 + Windows_Changer::Number_Of_Element]
        @item_background.src_rect.set($game_message.game_windows_position[10][0],
                                        $game_message.game_windows_position[10][1],
                                        $game_message.game_windows_position[10][2],
                                        $game_message.game_windows_position[10][3])
      end
    else
      @item_window.back_opacity = @temp1
      @item_window.opacity = @temp2
      @item_background.visible = false
    end
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      #@category_background.dispose
      #For some reason, dispose method is unavailable
      @help_background.dispose
      @item_background.dispose
      @background_item_viewport.dispose
    end
  rescue NameError
    def terminate
      super
      #@category_background.dispose
      #For some reason, dispose method is unavailable
      @help_background.dispose
      @item_background.dispose
      @background_item_viewport.dispose
    end
  end

end

#==============================================================================
# Scene_Skill
#==============================================================================

class Scene_Skill < Scene_ItemBase

  def create_help_window
    super
    @background_skill_viewport = Viewport.new
    @background_skill_viewport.z = 198
    @help_background.z = @background_skill_viewport.z
    @help_background.z += $game_message.game_windows_depth[4]
    if $game_switches[104 + Windows_Changer::Number_Of_Element]
        @help_background.src_rect.set($game_message.game_windows_position[4][0],
                                      $game_message.game_windows_position[4][1],
                                      $game_message.game_windows_position[4][2],
                                      $game_message.game_windows_position[4][3])
      end
  end

  alias michael_create_command_window create_command_window
  def create_command_window
    michael_create_command_window


    @command_background = Sprite.new(@background_skill_viewport)
    @command_background.x = @command_window.x
    @command_background.y = @command_window.y

    if $game_switches[111]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[11]
      name = $game_message.game_windows_name[11]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
      @command_background.z += $game_message.game_windows_depth[11]
      if $game_switches[111 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[11][0],
                                        $game_message.game_windows_position[11][1],
                                        $game_message.game_windows_position[11][2],
                                        $game_message.game_windows_position[11][3])
      end
    else
      @command_window.back_opacity = @temp1
      @command_window.opacity = @temp2
      @command_background.visible = false
    end
  end

  alias michael_create_status_window create_status_window
  def create_status_window
    michael_create_status_window
    @status_background = Sprite.new(@background_skill_viewport)
    @status_background.x = @status_window.x
    @status_background.y = @status_window.y

    if $game_switches[112]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[12]
      name = $game_message.game_windows_name[12]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
      @status_background.z += $game_message.game_windows_depth[12]
      if $game_switches[112 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[12][0],
                                        $game_message.game_windows_position[12][1],
                                        $game_message.game_windows_position[12][2],
                                        $game_message.game_windows_position[12][3])
      end
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
  end

  alias michael_create_item_window create_item_window
    def create_item_window
    michael_create_item_window
    @item_background = Sprite.new(@background_skill_viewport)
    @item_background.x = 0 #@item_window.x
    @item_background.y = 0 #@item_window.y
    if $game_switches[113]
      @item_window.back_opacity = 0
      @item_window.opacity = 0
      folder = $game_message.game_message_windows_folder[13]
      name = $game_message.game_windows_name[13]
      @item_background.bitmap = Cache.cache_extended(folder, name)
      @item_background.src_rect.width = @item_window.width
      @item_background.visible = true
      @item_background.z += $game_message.game_windows_depth[13]
      if $game_switches[113 + Windows_Changer::Number_Of_Element]
        @item_background.src_rect.set($game_message.game_windows_position[13][0],
                                      $game_message.game_windows_position[13][1],
                                      $game_message.game_windows_position[13][2],
                                      $game_message.game_windows_position[13][3])
      end
    else
      @item_window.back_opacity = @temp1
      @item_window.opacity = @temp2
      @item_background.visible = false
    end
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      @help_background.dispose
      @command_background.dispose
      @status_background.dispose
      @item_background.dispose
      @background_skill_viewport.dispose
    end
  rescue NameError
    def terminate
      super
      @help_background.dispose
      @command_background.dispose
      @status_background.dispose
      @item_background.dispose
      @background_skill_viewport.dispose
    end
  end


  #This might be a useless feature, but let's leave it here for now
=begin
  def update
    super
    if $game_switches[104]
      @help_window.back_opacity = 0
      @help_window.opacity = 0
      folder = $game_message.game_message_windows_folder[4]
      name = $game_message.game_windows_name[4]
      @help_background.bitmap = Cache.cache_extended(folder, name)
      @help_background.src_rect.width = @help_window.width
      @help_background.visible = true
      @help_background.z += $game_message.game_windows_depth[4]
      if $game_switches[104 + Windows_Changer::Number_Of_Element]
        @help_background.src_rect.set($game_message.game_windows_position[4][0],
                                      $game_message.game_windows_position[4][1],
                                      $game_message.game_windows_position[4][2],
                                      $game_message.game_windows_position[4][3])
      end
    else
      @help_window.back_opacity = @temp1
      @help_window.opacity = @temp2
      @help_background.visible = false
    end
    if $game_switches[111]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[11]
      name = $game_message.game_windows_name[11]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
      @command_background.z += $game_message.game_windows_depth[11]
      if $game_switches[111 + Windows_Changer::Number_Of_Element]
        @command_background.src_rect.set($game_message.game_windows_position[11][0],
                                        $game_message.game_windows_position[11][1],
                                        $game_message.game_windows_position[11][2],
                                        $game_message.game_windows_position[11][3])
      end
    else
      @command_window.back_opacity = @temp1
      @command_window.opacity = @temp2
      @command_background.visible = false
    end
    if $game_switches[112]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[12]
      name = $game_message.game_windows_name[12]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
      @status_background.z += $game_message.game_windows_depth[12]
      if $game_switches[112 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[12][0],
                                        $game_message.game_windows_position[12][1],
                                        $game_message.game_windows_position[12][2],
                                        $game_message.game_windows_position[12][3])
      end
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
    if $game_switches[113]
      @item_window.back_opacity = 0
      @item_window.opacity = 0
      folder = $game_message.game_message_windows_folder[13]
      name = $game_message.game_windows_name[13]
      @item_background.bitmap = Cache.cache_extended(folder, name)
      @item_background.src_rect.width = @item_window.width
      @item_background.visible = true
      @item_background.z += $game_message.game_windows_depth[13]
      if $game_switches[113 + Windows_Changer::Number_Of_Element]
        @item_background.src_rect.set($game_message.game_windows_position[13][0],
                                      $game_message.game_windows_position[13][1],
                                      $game_message.game_windows_position[13][2],
                                      $game_message.game_windows_position[13][3])
      end
    else
      @item_window.back_opacity = @temp1
      @item_window.opacity = @temp2
      @item_background.visible = false
    end
  end
=end

end

#==============================================================================
# Scene_Equip
#==============================================================================

class Scene_Equip < Scene_MenuBase
  #--------------------------------------------------------------------------
  # Start Processing
  #--------------------------------------------------------------------------
  alias michael_start start
  def start
    michael_start
    create_background_viewport
    create_backgrounds
  end

  def create_background_viewport
    @background_viewport = Viewport.new
    @background_viewport.z = 199
  end

  def create_backgrounds
    @temp1 = @status_window.back_opacity
    @temp2 = @status_window.opacity
    @status_background = Sprite.new(@background_viewport)
    @status_background.x = @status_window.x
    @status_background.y = @status_window.y
    @command_background = Sprite.new(@background_viewport)
    @command_background.x = @command_window.x
    @command_background.y = @command_window.y
    @slot_background = Sprite.new(@background_viewport)
    @slot_background.x = @slot_window.x
    @slot_background.y = @slot_window.y
    @item_background = Sprite.new(@background_viewport)
    @item_background.x = @item_window.x
    @item_background.y = @item_window.y
    if $game_switches[114]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[14]
      name = $game_message.game_windows_name[14]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
      @status_background.z += $game_message.game_windows_depth[14]
      if $game_switches[114 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[14][0],
                                        $game_message.game_windows_position[14][1],
                                        $game_message.game_windows_position[14][2],
                                        $game_message.game_windows_position[14][3])
      end
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
    if $game_switches[115]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[15]
      name = $game_message.game_windows_name[15]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
      @command_background.z += $game_message.game_windows_depth[15]
      if $game_switches[115 + Windows_Changer::Number_Of_Element]
        @command_background.src_rect.set($game_message.game_windows_position[15][0],
                                         $game_message.game_windows_position[15][1],
                                         $game_message.game_windows_position[15][2],
                                         $game_message.game_windows_position[15][3])
      end
    else
      @command_window.back_opacity = @temp1
      @command_window.opacity = @temp2
      @command_background.visible = false
    end
    if $game_switches[116]
      @slot_window.back_opacity = 0
      @slot_window.opacity = 0
      folder = $game_message.game_message_windows_folder[16]
      name = $game_message.game_windows_name[16]
      @slot_background.bitmap = Cache.cache_extended(folder, name)
      @slot_background.src_rect.width = @slot_window.width
      @slot_background.visible = true
      @slot_background.z += $game_message.game_windows_depth[16]
      if $game_switches[116 + Windows_Changer::Number_Of_Element]
        @slot_background.src_rect.set($game_message.game_windows_position[16][0],
                                      $game_message.game_windows_position[16][1],
                                      $game_message.game_windows_position[16][2],
                                      $game_message.game_windows_position[16][3])
      end
    else
      @slot_window.back_opacity = @temp1
      @slot_window.opacity = @temp2
      @slot_background.visible = false
    end
    if $game_switches[117]
      @item_window.back_opacity = 0
      @item_window.opacity = 0
      folder = $game_message.game_message_windows_folder[17]
      name = $game_message.game_windows_name[17]
      @item_background.bitmap = Cache.cache_extended(folder, name)
      @item_background.src_rect.width = @item_window.width
      @item_background.visible = true
      @item_background.z += $game_message.game_windows_depth[17]
      if $game_switches[117 + Windows_Changer::Number_Of_Element]
        @item_background.src_rect.set($game_message.game_windows_position[17][0],
                                      $game_message.game_windows_position[17][1],
                                      $game_message.game_windows_position[17][2],
                                      $game_message.game_windows_position[17][3])
      end
    else
      @item_window.back_opacity = @temp1
      @item_window.opacity = @temp2
      @item_background.visible = false
    end
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      @status_background.dispose
      @command_background.dispose
      @slot_background.dispose
      @item_background.dispose
      @background_viewport.dispose
    end
  rescue NameError
    def terminate
      super
      @status_background.dispose
      @command_background.dispose
      @slot_background.dispose
      @item_background.dispose
      @background_viewport.dispose
    end
  end

#This might be a useless feature, but let's leave it here for now
=begin
  def update
    super
    if $game_switches[114]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[14]
      name = $game_message.game_windows_name[14]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
    if $game_switches[115]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[15]
      name = $game_message.game_windows_name[15]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
    else
      @command_window.back_opacity = @temp1
      @command_window.opacity = @temp2
      @command_background.visible = false
    end
    if $game_switches[116]
      @slot_window.back_opacity = 0
      @slot_window.opacity = 0
      folder = $game_message.game_message_windows_folder[16]
      name = $game_message.game_windows_name[16]
      @slot_background.bitmap = Cache.cache_extended(folder, name)
      @slot_background.src_rect.width = @slot_window.width
      @slot_background.visible = true
    else
      @slot_window.back_opacity = @temp1
      @slot_window.opacity = @temp2
      @slot_background.visible = false
    end
    if $game_switches[117]
      @item_window.back_opacity = 0
      @item_window.opacity = 0
      folder = $game_message.game_message_windows_folder[17]
      name = $game_message.game_windows_name[17]
      @item_background.bitmap = Cache.cache_extended(folder, name)
      @item_background.src_rect.width = @item_window.width
      @item_background.visible = true
    else
      @item_window.back_opacity = @temp1
      @item_window.opacity = @temp2
      @item_background.visible = false
    end
  end
=end

end

#==============================================================================
# Scene_Status
#==============================================================================

class Scene_Status < Scene_MenuBase
  #--------------------------------------------------------------------------
  # Start Processing
  #--------------------------------------------------------------------------
  alias michael_start start
  def start
    michael_start
    @background_viewport = Viewport.new
    @temp1 = @status_window.back_opacity
    @temp2 = @status_window.opacity
    @status_background = Sprite.new(@background_viewport)
    @status_background.x = @status_window.x
    @status_background.y = @status_window.y
    if $game_switches[118]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[18]
      name = $game_message.game_windows_name[18]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
      @status_background.z += $game_message.game_windows_depth[18]
      if $game_switches[118 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[18][0],
                                        $game_message.game_windows_position[18][1],
                                        $game_message.game_windows_position[18][2],
                                        $game_message.game_windows_position[18][3])
      end
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      @status_background.dispose
      @background_viewport.dispose
    end
  rescue NameError
    def terminate
      super
      @status_background.dispose
      @background_viewport.dispose
    end
  end
=begin
  def update
    super
    if $game_switches[118]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[18]
      name = $game_message.game_windows_name[18]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
  end
=end
end

#==============================================================================
# Scene_File
#==============================================================================

class Scene_File < Scene_MenuBase
  #--------------------------------------------------------------------------
  # Start Processing
  #--------------------------------------------------------------------------
  alias michael_start start
  def start
    create_background_viewport
    michael_start
  end

  def create_background_viewport
    @background_viewport = Viewport.new
  end
  #--------------------------------------------------------------------------
  # Termination Processing
  #--------------------------------------------------------------------------
  alias michael_terminate terminate
  def terminate
    michael_terminate
    @savefile_backgrounds.each {|background| background.dispose}
    @background_viewport.dispose
    @help_background.dispose
  end
  #--------------------------------------------------------------------------
  # * Frame Update
  #--------------------------------------------------------------------------
  alias michael_update update
  def update
    michael_update
    if $game_switches[104]
      @help_window.back_opacity = 0
      @help_window.opacity = 0
      folder = $game_message.game_message_windows_folder[4]
      name = $game_message.game_windows_name[4]
      @help_background.bitmap = Cache.cache_extended(folder, name)
      @help_background.src_rect.width = @help_window.width
      @help_background.visible = true
      @help_background.z += $game_message.game_windows_depth[4]
      if $game_switches[104 + Windows_Changer::Number_Of_Element]
        @help_background.src_rect.set($game_message.game_windows_position[4][0],
                                      $game_message.game_windows_position[4][1],
                                      $game_message.game_windows_position[4][2],
                                      $game_message.game_windows_position[4][3])
      end
    else
      @help_window.back_opacity = @temp1
      @help_window.opacity = @temp2
      @help_background.visible = false
    end
    if $game_switches[119]
      Array.new(item_max) do |i|
        @savefile_windows[i].back_opacity = 0
        @savefile_windows[i].opacity = 0
      end

      folder = $game_message.game_message_windows_folder[19]
      name = $game_message.game_windows_name[19]
      Array.new(item_max) do |i|
        @savefile_backgrounds[i].bitmap = Cache.cache_extended(folder, name)
        @savefile_backgrounds[i].src_rect.width = @savefiles_windows.width
        @savefile_backgrounds[i].visible = true
      end
    else
      Array.new(item_max) do |i|
        @savefile_windows[i].back_opacity = @temp1
        @savefile_windows[i].opacity = @temp2
      end
      Array.new(item_max) do |i|
        @savefile_backgrounds[i].visible = false
      end
    end
  end
  #--------------------------------------------------------------------------
  # Create Help Window
  #--------------------------------------------------------------------------
  alias michael_create_help_window create_help_window
  def create_help_window
    michael_create_help_window
    @temp1 = @help_window.back_opacity
    @temp2 = @help_window.opacity
    @help_background = Sprite.new(@background_viewport)
    @help_background.x = @help_window.x
    @help_background.y = @help_window.y
    if $game_switches[104]
      @help_window.back_opacity = 0
      @help_window.opacity = 0
      folder = $game_message.game_message_windows_folder[4]
      name = $game_message.game_windows_name[4]
      @help_background.bitmap = Cache.cache_extended(folder, name)
      @help_background.src_rect.width = @help_window.width
      @help_background.visible = true
      @help_background.z += $game_message.game_windows_depth[4]
      if $game_switches[104 + Windows_Changer::Number_Of_Element]
        @help_background.src_rect.set($game_message.game_windows_position[4][0],
                                      $game_message.game_windows_position[4][1],
                                      $game_message.game_windows_position[4][2],
                                      $game_message.game_windows_position[4][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # Create Save File Window
  #--------------------------------------------------------------------------
  alias michael_create_savefile_windows create_savefile_windows
  def create_savefile_windows
    michael_create_savefile_windows
    @savefile_backgrounds = Array.new(item_max) do |i|
      Sprite.new(@background_viewport)
    end

    Array.new(item_max) do |i|
      @savefile_backgrounds[i].x = @savefile_windows[i].x
      @savefile_backgrounds[i].y = @savefile_windows[i].y
    end
    if $game_switches[119]
      Array.new(item_max) do |i|
        window.back_opacity = 0
        window.opacity = 0
      end
      folder = $game_message.game_message_windows_folder[19]
      name = $game_message.game_windows_name[19]
      Array.new(item_max) do |i|
        @savefile_backgrounds[i].bitmap = Cache.cache_extended(folder, name)
        @savefile_backgrounds[i].src_rect.width = @savefiles_windows.width
        @savefile_backgrounds[i].visible = true
      end
    end
  end
end


#==============================================================================
# Scene_End
#==============================================================================

class Scene_End < Scene_MenuBase
  #--------------------------------------------------------------------------
  # Start Processing
  #--------------------------------------------------------------------------
  alias michael_start start
  def start
    create_background_viewport
    michael_start
  end

  def create_background_viewport
    @background_viewport = Viewport.new
    @background_viewport.z = 199
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      @command_background.dispose
      @background_viewport.dispose
    end
  rescue NameError
    def terminate
      super
      @command_background.dispose
      @background_viewport.dispose
    end
  end

  #--------------------------------------------------------------------------
  # Create Command Window
  #--------------------------------------------------------------------------
  alias michael_create_command_window create_command_window
  def create_command_window
    michael_create_command_window
    @temp1 = @command_window.back_opacity
    @temp2 = @command_window.opacity
    @command_background = Sprite.new(@background_viewport)
    @command_background.x = @command_window.x
    @command_background.y = @command_window.y
    if $game_switches[142]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[42]
      name = $game_message.game_windows_name[42]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
      @command_background.z += $game_message.game_windows_depth[42]
      if $game_switches[142 + Windows_Changer::Number_Of_Element]
        @command_background.src_rect.set($game_message.game_windows_position[42][0],
                                         $game_message.game_windows_position[42][1],
                                         $game_message.game_windows_position[42][2],
                                         $game_message.game_windows_position[42][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # Close Command Window
  #--------------------------------------------------------------------------
  alias michael_close_command_window close_command_window
  def close_command_window
    michael_close_command_window
    @command_background.visible = false if @command_window.close?
  end

=begin
  def update
    super
    if $game_switches[142]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[42]
      name = $game_message.game_windows_name[42]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
    else
      @command_window.back_opacity = @temp1
      @command_window.opacity = @temp2
      @command_background.visible = false
    end
  end
=end
end


#==============================================================================
# Scene_Shop
#==============================================================================

class Scene_Shop < Scene_MenuBase
  #--------------------------------------------------------------------------
  # Start Processing
  #--------------------------------------------------------------------------
  alias michael_start start
  def start
    create_background_viewport
    michael_start
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      @sell_background.dispose
      @category_background.dispose
      @buy_background.dispose
      @status_background.dispose
      @number_background.dispose
      @dummy_background.dispose
      @command_background.dispose
      @gold_background.dispose
      @background_viewport.dispose
    end
  rescue NameError
    def terminate
      super
      @sell_background.dispose
      @category_background.dispose
      @buy_background.dispose
      @status_background.dispose
      @number_background.dispose
      @dummy_background.dispose
      @command_background.dispose
      @gold_background.dispose
      @background_viewport.dispose
    end
  end

  def create_background_viewport
    @background_viewport = Viewport.new
    @background_viewport.z = 199
  end

  #--------------------------------------------------------------------------
  # * Create Gold Window
  #--------------------------------------------------------------------------
  alias michael_create_gold_window create_gold_window
  def create_gold_window
    michael_create_gold_window
    @gold_background = Sprite.new(@background_viewport)
    @gold_background.x = @gold_window.x
    @gold_background.y = @gold_window.y
    if $game_switches[105]
      @gold_window.back_opacity = 0
      @gold_window.opacity = 0
      folder = $game_message.game_message_windows_folder[5]
      name = $game_message.game_windows_name[5]
      @gold_background.bitmap = Cache.cache_extended(folder, name)
      @gold_background.src_rect.width = @gold_window.width
      @gold_background.visible = true
      @gold_background.z += $game_message.game_windows_depth[5]
      if $game_switches[105 + Windows_Changer::Number_Of_Element]
        @gold_background.src_rect.set($game_message.game_windows_position[5][0],
                                      $game_message.game_windows_position[5][1],
                                      $game_message.game_windows_position[5][2],
                                      $game_message.game_windows_position[5][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # * Create Command Window
  #--------------------------------------------------------------------------
  alias michael_create_command_window create_command_window
  def create_command_window
    michael_create_command_window
    @command_background = Sprite.new(@background_viewport)
    @command_background.x = @command_window.x
    @command_background.y = @command_window.y
    if $game_switches[120]
      @command_window.back_opacity = 0
      @command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[20]
      name = $game_message.game_windows_name[20]
      @command_background.bitmap = Cache.cache_extended(folder, name)
      @command_background.src_rect.width = @command_window.width
      @command_background.visible = true
      @command_background.z += $game_message.game_windows_depth[20]
      if $game_switches[120 + Windows_Changer::Number_Of_Element]
        @command_background.src_rect.set($game_message.game_windows_position[20][0],
                                         $game_message.game_windows_position[20][1],
                                         $game_message.game_windows_position[20][2],
                                         $game_message.game_windows_position[20][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # * Create Dummy Window
  #--------------------------------------------------------------------------
  alias michael_create_dummy_window create_dummy_window
  def create_dummy_window
    michael_create_dummy_window
    @dummy_background = Sprite.new(@background_viewport)
    @dummy_background.x = @dummy_window.x
    @dummy_background.y = @dummy_window.y
    if $game_switches[145]
      @dummy_window.back_opacity = 0
      @dummy_window.opacity = 0
      folder = $game_message.game_message_windows_folder[45]
      name = $game_message.game_windows_name[45]
      @dummy_background.bitmap = Cache.cache_extended(folder, name)
      @dummy_background.src_rect.width = @dummy_window.width
      @dummy_background.visible = true
      @dummy_background.z += $game_message.game_windows_depth[45]
      if $game_switches[145 + Windows_Changer::Number_Of_Element]
        @dummy_background.src_rect.set($game_message.game_windows_position[45][0],
                                       $game_message.game_windows_position[45][1],
                                       $game_message.game_windows_position[45][2],
                                       $game_message.game_windows_position[45][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # * Create Quantity Input Window
  #--------------------------------------------------------------------------
  alias michael_create_number_window create_number_window
  def create_number_window
    michael_create_number_window
    @number_background.x = @number_window.x
    @number_background.y = @number_window.y
    if $game_switches[123]
      @number_window.back_opacity = 0
      @number_window.opacity = 0
      folder = $game_message.game_message_windows_folder[23]
      name = $game_message.game_windows_name[23]
      @number_background.bitmap = Cache.cache_extended(folder, name)
      @number_background.src_rect.width = @number_window.width
      @number_background.visible = false
      @number_background.z += $game_message.game_windows_depth[23]
      if $game_switches[123 + Windows_Changer::Number_Of_Element]
        @number_background.src_rect.set($game_message.game_windows_position[23][0],
                                        $game_message.game_windows_position[23][1],
                                        $game_message.game_windows_position[23][2],
                                        $game_message.game_windows_position[23][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # * Create Status Window
  #--------------------------------------------------------------------------
  alias michael_create_status_window create_status_window
  def create_status_window
    michael_create_status_window
    @status_background = Sprite.new(@background_viewport)
    @status_background.x = @status_window.x
    @status_background.y = @status_window.y
    if $game_switches[124]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[24]
      name = $game_message.game_windows_name[24]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = false
      @status_background.z += $game_message.game_windows_depth[24]
      if $game_switches[124 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[24][0],
                                        $game_message.game_windows_position[24][1],
                                        $game_message.game_windows_position[24][2],
                                        $game_message.game_windows_position[24][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # Create Purchase Window
  #--------------------------------------------------------------------------
  alias michael_create_buy_window create_buy_window
  def create_buy_window
    michael_create_buy_window
    @buy_background = Sprite.new(@background_viewport)
    @buy_background.x = @buy_window.x
    @buy_background.y = @buy_window.y
    if $game_switches[121]
      @buy_window.back_opacity = 0
      @buy_window.opacity = 0
      folder = $game_message.game_message_windows_folder[21]
      name = $game_message.game_windows_name[21]
      @buy_background.bitmap = Cache.cache_extended(folder, name)
      @buy_background.src_rect.width = @buy_window.width
      @buy_background.visible = false
      @buy_background.z += $game_message.game_windows_depth[21]
      if $game_switches[121 + Windows_Changer::Number_Of_Element]
        @buy_background.src_rect.set($game_message.game_windows_position[21][0],
                                     $game_message.game_windows_position[21][1],
                                     $game_message.game_windows_position[21][2],
                                     $game_message.game_windows_position[21][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # Create Category Window
  #--------------------------------------------------------------------------
  alias michael_create_category_window create_category_window
  def create_category_window
    michael_create_category_window
    @category_background = Sprite.new(@background_viewport)
    @category_background.x = @category_window.x
    @category_background.y = @category_window.y
    if $game_switches[109]
      @category_window.back_opacity = 0
      @category_window.opacity = 0
      folder = $game_message.game_message_windows_folder[9]
      name = $game_message.game_windows_name[9]
      @category_background.bitmap = Cache.cache_extended(folder, name)
      @category_background.src_rect.width = @category_window.width
      @category_background.visible = false
      @category_background.z += $game_message.game_windows_depth[9]
      if $game_switches[109 + Windows_Changer::Number_Of_Element]
        @category_background.src_rect.set($game_message.game_windows_position[9][0],
                                          $game_message.game_windows_position[9][1],
                                          $game_message.game_windows_position[9][2],
                                          $game_message.game_windows_position[9][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # * Create Sell Window
  #--------------------------------------------------------------------------
  alias michael_create_sell_window create_sell_window
  def create_sell_window
    michael_create_sell_window
    @sell_background = Sprite.new(@background_viewport)
    @sell_background.x = @sell_window.x
    @sell_background.y = @sell_window.y
    if $game_switches[122]
      @sell_window.back_opacity = 0
      @sell_window.opacity = 0
      folder = $game_message.game_message_windows_folder[22]
      name = $game_message.game_windows_name[22]
      @sell_background.bitmap = Cache.cache_extended(folder, name)
      @sell_background.src_rect.width = @sell_window.width
      @sell_background.visible = false
      @sell_background.z += $game_message.game_windows_depth[22]
      if $game_switches[122 + Windows_Changer::Number_Of_Element]
        @sell_background.src_rect.set($game_message.game_windows_position[22][0],
                                      $game_message.game_windows_position[22][1],
                                      $game_message.game_windows_position[22][2],
                                      $game_message.game_windows_position[22][3])
      end
    end
  end
  #--------------------------------------------------------------------------
  # * Activate Purchase Window
  #--------------------------------------------------------------------------
  alias michael_activate_buy_window activate_buy_window
  def activate_buy_window
    michael_activate_buy_window
    @buy_background.visible = true
    @status_background.visible = true
  end
  #--------------------------------------------------------------------------
  # * Activate Sell Window
  #--------------------------------------------------------------------------
  alias michael_activate_sell_window activate_sell_window
  def activate_sell_window
    michael_activate_sell_window
    @category_background.visible = true
    @sell_background.visible = true
    @status_background.visible = false

  end
  #--------------------------------------------------------------------------
  # * [Buy] Command
  #--------------------------------------------------------------------------
  alias michael_command_buy command_buy
  def command_buy
    @dummy_background.visible = false
    michael_command_buy
  end
  #--------------------------------------------------------------------------
  # * [Sell] Command
  #--------------------------------------------------------------------------
  alias michael_command_sell command_sell
  def command_sell
    michael_command_sell command_sell
    @dummy_background.visible = false
    @category_background.visible = true
    @sell_background.visible = true
  end
  #--------------------------------------------------------------------------
  # * Buy [OK]
  #--------------------------------------------------------------------------
  alias michael_on_buy_ok on_buy_ok
  def on_buy_ok
    michael_on_buy_ok
    @buy_background.visible = false
    @number_background.visible = true
  end
  #--------------------------------------------------------------------------
  # * Buy [Cancel]
  #--------------------------------------------------------------------------
  alias michael_on_buy_cancel on_buy_cancel
  def on_buy_cancel
    michael_on_buy_cancel
    @dummy_background.visible = true
    @buy_background.visible = false
    @status_background.visible = false
  end
  #--------------------------------------------------------------------------
  # Category [Cancel]
  #--------------------------------------------------------------------------
  alias michael_on_category_cancel on_category_cancel
  def on_category_cancel
    michael_on_category_cancel
    @dummy_background.visible = true
    @category_background.visible = false
    @sell_background.visible = false
  end
  #--------------------------------------------------------------------------
  # Sell [OK]
  #--------------------------------------------------------------------------
  alias michael_on_sell_ok on_sell_ok
  def on_sell_ok
    michael_on_sell_ok
    @category_background.visible = false
    @sell_background.visible = false
    @number_background.visible = true
    @status_background.visible = true
  end
  #--------------------------------------------------------------------------
  # Sell [Cancel]
  #--------------------------------------------------------------------------
  alias michael_on_sell_cancel on_sell_cancel
  def on_sell_cancel
    michael_on_sell_cancel
    @sell_background.visible = false
  end
  #--------------------------------------------------------------------------
  # Exit Quantity Input
  #--------------------------------------------------------------------------
  alias michael_end_number_input end_number_input
  def end_number_input
    michael_end_number_input
    @number_background.visible = false
  end
end

#==============================================================================
# Scene_Name
#==============================================================================

class Scene_Name < Scene_MenuBase
  #--------------------------------------------------------------------------
  # Start Processing
  #--------------------------------------------------------------------------
  alias michael_start start
  def start
    michael_start
    @background_viewport = Viewport.new
    @background_viewport.z = 199
    @edit_background = Sprite.new(@background_viewport)
    @edit_background.x = @edit_window.x
    @edit_background.y = @edit_window.y
    if $game_switches[125]
      @edit_window.back_opacity = 0
      @edit_window.opacity = 0
      folder = $game_message.game_message_windows_folder[25]
      name = $game_message.game_windows_name[25]
      @edit_background.bitmap = Cache.cache_extended(folder, name)
      @edit_background.src_rect.width = @edit_window.width
      @edit_background.visible = true
      @edit_background.z += $game_message.game_windows_depth[25]
      if $game_switches[125 + Windows_Changer::Number_Of_Element]
        @edit_background.src_rect.set($game_message.game_windows_position[25][0],
                                      $game_message.game_windows_position[25][1],
                                      $game_message.game_windows_position[25][2],
                                      $game_message.game_windows_position[25][3])
      end
    end
    @input_background = Sprite.new(@background_viewport)
    @input_background.x = @input_window.x
    @input_background.y = @input_window.y
    if $game_switches[126]
      @input_window.back_opacity = 0
      @input_window.opacity = 0
      folder = $game_message.game_message_windows_folder[26]
      name = $game_message.game_windows_name[26]
      @input_background.bitmap = Cache.cache_extended(folder, name)
      @input_background.src_rect.width = @input_window.width
      @input_background.visible = true
      @input_background.z += $game_message.game_windows_depth[26]
      if $game_switches[126 + Windows_Changer::Number_Of_Element]
        @input_background.src_rect.set($game_message.game_windows_position[26][0],
                                       $game_message.game_windows_position[26][1],
                                       $game_message.game_windows_position[26][2],
                                       $game_message.game_windows_position[26][3])
      end
    end
  end

  begin
    mod = self.const_get "terminate"
    alias michael_terminate terminate
    def terminate
      michael_terminate
      @background_viewport.dispose
      @edit_background.dispose
      @input_background.dispose
    end
  rescue NameError
    def terminate
      super
      @background_viewport.dispose
      @edit_background.dispose
      @input_background.dispose
    end
  end
end


#==============================================================================
# Scene_Debug
#==============================================================================

class Scene_Debug < Scene_MenuBase

  #--------------------------------------------------------------------------
  # * Termination Processing
  #--------------------------------------------------------------------------
  alias michael_terminate terminate
  def terminate
    @background_viewport.dispose
    @left_background.dispose
    @right_background.dispose
    @debug_help_background.dispose
    michael_terminate
  end
  #--------------------------------------------------------------------------
  # Create Left Window
  #--------------------------------------------------------------------------
  alias michael_create_left_window create_left_window
  def create_left_window
    michael_create_left_window
    @background_viewport = Viewport.new
    @background_viewport.z = 199
    @left_background = Sprite.new(@background_viewport)
    @left_background.x = @left_window.x
    @left_background.y = @left_window.y
    @temp1 = @left_background.back_opacity
    @temp2 = @left_background.opacity
  end
  #--------------------------------------------------------------------------
  # Create Right Window
  #--------------------------------------------------------------------------
  alias michael_create_right_window create_right_window
  def create_right_window
    michael_create_right_window
    @right_background = Sprite.new(@background_viewport)
    @right_background.x = @right_window.x
    @right_background.y = @right_window.y
  end
  #--------------------------------------------------------------------------
  # Create Help Window
  #--------------------------------------------------------------------------
  alias michael_create_debug_help_window create_debug_help_window
  def create_debug_help_window
    michael_create_message_window
    @debug_help_background = Sprite.new(@background_viewport)
    @debug_help_background.x = @debug_help_window.x
    @debug_help_background.y = @debug_help_window.y
  end

  alias michael_refresh_help_window refresh_help_window
  def refresh_help_window

    if $game_switches[143]
      @left_window.back_opacity = 0
      @left_window.opacity = 0
      folder = $game_message.game_message_windows_folder[43]
      name = $game_message.game_windows_name[43]
      @left_background.bitmap = Cache.cache_extended(folder, name)
      @left_background.src_rect.width = @left_window.width
      @left_background.visible = true
      @left_background.z += $game_message.game_windows_depth[43]
      if $game_switches[143 + Windows_Changer::Number_Of_Element]
        @left_background.src_rect.set($game_message.game_windows_position[43][0],
                                      $game_message.game_windows_position[43][1],
                                      $game_message.game_windows_position[43][2],
                                      $game_message.game_windows_position[43][3])
      end
    else
      @left_window.back_opacity = @temp1
      @left_window.opacity = @temp2
      @left_background.visible = false
    end
    if $game_switches[144]
      @right_window.back_opacity = 0
      @right_window.opacity = 0
      folder = $game_message.game_message_windows_folder[44]
      name = $game_message.game_windows_name[44]
      @right_background.bitmap = Cache.cache_extended(folder, name)
      @right_background.src_rect.width = @right_window.width
      @right_background.visible = true
      @right_background.z += $game_message.game_windows_depth[44]
      if $game_switches[144 + Windows_Changer::Number_Of_Element]
        @right_background.src_rect.set($game_message.game_windows_position[44][0],
                                       $game_message.game_windows_position[44][1],
                                       $game_message.game_windows_position[44][2],
                                       $game_message.game_windows_position[44][3])
      end
    else
      @right_window.back_opacity = @temp1
      @right_window.opacity = @temp2
      @right_background.visible = false
    end
    if $game_switches[145]
      @debug_help_window.back_opacity = 0
      @debug_help_window.opacity = 0
      folder = $game_message.game_message_windows_folder[45]
      name = $game_message.game_windows_name[45]
      @debug_help_background.bitmap = Cache.cache_extended(folder, name)
      @debug_help_background.src_rect.width = @debug_help_window.width
      @debug_help_background.visible = true
      @debug_help_background.z += $game_message.game_windows_depth[45]
      if $game_switches[145 + Windows_Changer::Number_Of_Element]
        @debug_help_background.src_rect.set($game_message.game_windows_position[45][0],
                                            $game_message.game_windows_position[45][1],
                                            $game_message.game_windows_position[45][2],
                                            $game_message.game_windows_position[45][3])
      end
    else
      @debug_help_window.back_opacity = @temp1
      @debug_help_window.opacity = @temp2
      @debug_help_background.visible = false
    end
  end
end

#==============================================================================
# Scene_Battle
#==============================================================================

class Scene_Battle < Scene_Base

  alias michael_terminate terminate
  def terminate
    michael_terminate
    @background_viewport.dispose
    @message_background.dispose
    @scroll_text_background.dispose
    @log_background.dispose
    @status_background.dispose
    @party_command_background.dispose
    @actor_command_background.dispose
    @help_background.dispose
    @skill_background.dispose
    @item_background.dispose
    @actor_background.dispose
    @enemy_background.dispose
  end

  #--------------------------------------------------------------------------
  #  Update Frame (Basic)
  #--------------------------------------------------------------------------
  alias michael_update_basic update_basic
  def update_basic
    michael_update_basic
    if $game_switches[104]
      @help_window.back_opacity = 0
      @help_window.opacity = 0
      folder = $game_message.game_message_windows_folder[4]
      name = $game_message.game_windows_name[4]
      @help_background.bitmap = Cache.cache_extended(folder, name)
      @help_background.src_rect.width = @help_window.width
      @help_background.visible = true
      @help_background.z += $game_message.game_windows_depth[4]
      if $game_switches[104 + Windows_Changer::Number_Of_Element]
        @help_background.src_rect.set($game_message.game_windows_position[4][0],
                                      $game_message.game_windows_position[4][1],
                                      $game_message.game_windows_position[4][2],
                                      $game_message.game_windows_position[4][3])
      end
    else
      @help_window.back_opacity = @temp1
      @help_window.opacity = @temp2
      @help_background.visible = false
    end
    if $game_switches[130]
      @message_window.back_opacity = 0
      @message_window.opacity = 0
      folder = $game_message.game_message_windows_folder[30]
      name = $game_message.game_windows_name[30]
      @message_background.bitmap = Cache.cache_extended(folder, name)
      @message_background.src_rect.width = @message_window.width
      @message_background.visible = true
      @message_background.z += $game_message.game_windows_depth[30]
      if $game_switches[130 + Windows_Changer::Number_Of_Element]
        @message_background.src_rect.set($game_message.game_windows_position[30][0],
                                         $game_message.game_windows_position[30][1],
                                         $game_message.game_windows_position[30][2],
                                         $game_message.game_windows_position[30][3])
      end
    else
      @message_window.back_opacity = @temp1
      @message_window.opacity = @temp2
      @message_background.visible = false
    end
    if $game_switches[131]
      @scroll_text_window.back_opacity = 0
      scroll_text_window.opacity = 0
      folder = $game_message.game_message_windows_folder[31]
      name = $game_message.game_windows_name[31]
      @scroll_text_background.bitmap = Cache.cache_extended(folder, name)
      @scroll_text_background.src_rect.width = @scroll_text_window.width
      @scroll_text_background.visible = true
      @scroll_text_background.z += $game_message.game_windows_depth[31]
      if $game_switches[131 + Windows_Changer::Number_Of_Element]
        @scroll_text_background.src_rect.set($game_message.game_windows_position[31][0],
                                             $game_message.game_windows_position[31][1],
                                             $game_message.game_windows_position[31][2],
                                             $game_message.game_windows_position[31][3])
      end
    else
      @scroll_text_window.back_opacity = @temp1
      @scroll_text_window.opacity = @temp2
      @scroll_text_background.visible = false
    end
    if $game_switches[133]
      @log_window.back_opacity = 0
      @log_window.opacity = 0
      folder = $game_message.game_message_windows_folder[33]
      name = $game_message.game_windows_name[33]
      @log_background.bitmap = Cache.cache_extended(folder, name)
      @log_background.src_rect.width = @log_window.width
      @log_background.visible = true
      @log_background.z += $game_message.game_windows_depth[33]
      if $game_switches[133 + Windows_Changer::Number_Of_Element]
        @log_background.src_rect.set($game_message.game_windows_position[33][0],
                                     $game_message.game_windows_position[33][1],
                                     $game_message.game_windows_position[33][2],
                                     $game_message.game_windows_position[33][3])
      end
    else
      #@log_window.back_opacity = @temp1
      #@log_window.opacity = @temp2
      @log_background.visible = false
    end
    if $game_switches[134]
      @party_command_window.back_opacity = 0
      @party_command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[34]
      name = $game_message.game_windows_name[34]
      @party_command_background.bitmap = Cache.cache_extended(folder, name)
      @party_command_background.src_rect.width = @party_command_window.width
      @party_command_background.visible = true
      @party_command_background.z += $game_message.game_windows_depth[34]
      if $game_switches[134 + Windows_Changer::Number_Of_Element]
        @party_command_background.src_rect.set($game_message.game_windows_position[34][0],
                                               $game_message.game_windows_position[34][1],
                                               $game_message.game_windows_position[34][2],
                                               $game_message.game_windows_position[34][3])
      end
    else
      @party_command_window.back_opacity = @temp1
      @party_command_window.opacity = @temp2
      @party_command_background.visible = false
    end
    if $game_switches[135]
      @actor_command_window.back_opacity = 0
      @actor_command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[35]
      name = $game_message.game_windows_name[35]
      @actor_command_background.bitmap = Cache.cache_extended(folder, name)
      @actor_command_background.src_rect.width = @actor_command_window.width
      @actor_command_background.visible = true
      @actor_command_background.z += $game_message.game_windows_depth[35]
      if $game_switches[135 + Windows_Changer::Number_Of_Element]
        @actor_background.src_rect.set($game_message.game_windows_position[35][0],
                                       $game_message.game_windows_position[35][1],
                                       $game_message.game_windows_position[35][2],
                                       $game_message.game_windows_position[35][3])
      end
    else
      @actor_command_window.back_opacity = @temp1
      @actor_command_window.opacity = @temp2
      @actor_command_background.visible = false
    end
    if $game_switches[136]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[36]
      name = $game_message.game_windows_name[36]
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
      @status_background.z += $game_message.game_windows_depth[36]
      if $game_switches[136 + Windows_Changer::Number_Of_Element]
        @status_background.src_rect.set($game_message.game_windows_position[36][0],
                                        $game_message.game_windows_position[36][1],
                                        $game_message.game_windows_position[36][2],
                                        $game_message.game_windows_position[36][3])
      end
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
    if $game_switches[137]
      @actor_window.back_opacity = 0
      @actor_window.opacity = 0
      folder = $game_message.game_message_windows_folder[37]
      name = $game_message.game_windows_name[37]
      @actor_background.bitmap = Cache.cache_extended(folder, name)
      @actor_background.src_rect.width = @actor_window.width
      @actor_background.visible = true
      @actor_background.z += $game_message.game_windows_depth[37]
      if $game_switches[137 + Windows_Changer::Number_Of_Element]
        @actor_background.src_rect.set($game_message.game_windows_position[37][0],
                                       $game_message.game_windows_position[37][1],
                                       $game_message.game_windows_position[37][2],
                                       $game_message.game_windows_position[37][3])
      end
    else
      @actor_window.back_opacity = @temp1
      @actor_window.opacity = @temp2
      @actor_background.visible = false
    end
    if $game_switches[138]
      @enemy_window.back_opacity = 0
      @enemy_window.opacity = 0
      folder = $game_message.game_message_windows_folder[38]
      name = $game_message.game_windows_name[38]
      @enemy_background.bitmap = Cache.cache_extended(folder, name)
      @enemy_background.src_rect.width = @enemy_window.width
      @enemy_background.visible = true
      @enemy_background.z += $game_message.game_windows_depth[38]
      if $game_switches[138 + Windows_Changer::Number_Of_Element]
        @enemy_background.src_rect.set($game_message.game_windows_position[38][0],
                                       $game_message.game_windows_position[38][1],
                                       $game_message.game_windows_position[38][2],
                                       $game_message.game_windows_position[38][3])
      end
    else
      @enemy_window.back_opacity = @temp1
      @enemy_window.opacity = @temp2
      @enemy_background.visible = false
    end
    if $game_switches[139]
      @skill_window.back_opacity = 0
      @skill_window.opacity = 0
      folder = $game_message.game_message_windows_folder[39]
      name = $game_message.game_windows_name[39]
      @skill_background.bitmap = Cache.cache_extended(folder, name)
      @skill_background.src_rect.width = @skill_window.width
      @skill_background.visible = true
      @skill_background.z += $game_message.game_windows_depth[39]
      if $game_switches[139 + Windows_Changer::Number_Of_Element]
        @skill_background.src_rect.set($game_message.game_windows_position[39][0],
                                       $game_message.game_windows_position[39][1],
                                       $game_message.game_windows_position[39][2],
                                       $game_message.game_windows_position[39][3])
      end
    else
      @skill_window.back_opacity = @temp1
      @skill_window.opacity = @temp2
      @skill_background.visible = false
    end
    if $game_switches[140]
      @item_window.back_opacity = 0
      @item_window.opacity = 0
      folder = $game_message.game_message_windows_folder[40]
      name = $game_message.game_windows_name[40]
      @item_background.bitmap = Cache.cache_extended(folder, name)
      @item_background.src_rect.width = @item_window.width
      @item_background.visible = true
      @item_background.z += $game_message.game_windows_depth[40]
    if $game_switches[140 + Windows_Changer::Number_Of_Element]
        @item_background.src_rect.set($game_message.game_windows_position[40][0],
                                      $game_message.game_windows_position[40][1],
                                      $game_message.game_windows_position[40][2],
                                      $game_message.game_windows_position[40][3])
      end
    else
      @item_window.back_opacity = @temp1
      @item_window.opacity = @temp2
      @item_background.visible = false
    end
  end

  #-------------------------------------------------------------------------
  # Update Processing for Opening Message Window
  #--------------------------------------------------------------------------
  alias michael_update_message_open update_message_open
  def update_message_open
    if $game_message.busy? && !@status_window.close?
      @status_background.visible = false
      @party_command_background.visible = false
      @actor_command_background.visible = false
    end
    michael_update_message_open
  end

  #--------------------------------------------------------------------------
  #  Create Message Window
  #--------------------------------------------------------------------------
  alias michael_create_message_window create_message_window
  def create_message_window
    michael_create_message_window
    @message_background = Sprite.new(@background_viewport)
    @message_background.x = @message_window.x
    @message_background.y = @message_window.y
  end
  #--------------------------------------------------------------------------
  #  Create Scrolling Text Window
  #--------------------------------------------------------------------------
  alias michael_create_scroll_text_window create_scroll_text_window
  def create_scroll_text_window
    michael_create_scroll_text_window
    @scroll_text_background = Sprite.new(@background_viewport)
    @scroll_text_background.x = @scroll_text_window.x
    @scroll_text_background.y = @scroll_text_window.y
  end
  #--------------------------------------------------------------------------
  #  Create Log Window
  #--------------------------------------------------------------------------
  alias michael_create_log_window create_log_window
  def create_log_window
    michael_create_log_window
    @log_background = Sprite.new(@background_viewport)
    @log_background.x = @log_window.x
    @log_background.y = @log_window.y
  end

  #--------------------------------------------------------------------------
  #  Create Status Window
  #--------------------------------------------------------------------------
  alias michael_create_status_window create_status_window
  def create_status_window
    michael_create_status_window
    @status_background = Sprite.new(@background_viewport)
    @status_background.x = @status_window.x
    @status_background.y = @status_window.y
    @temp1 = @status_window.back_opacity
    @temp2 = @status_window.opacity
  end
  #--------------------------------------------------------------------------
  #  Create Information Display Viewport
  #--------------------------------------------------------------------------
  alias michael_create_info_viewport create_info_viewport
  def create_info_viewport
    michael_create_info_viewport
    @background_viewport = Viewport.new
    @background_viewport.rect.y = Graphics.height - @status_window.height
    @background_viewport.rect.height = @status_window.height
    @background_viewport.z = 99
  end

  #--------------------------------------------------------------------------
  #  Create Party Commands Window
  #--------------------------------------------------------------------------
  alias michael_create_party_command_window create_party_command_window
  def create_party_command_window
    michael_create_party_command_window
    @party_command_background = Sprite.new(@background_viewport)
    @party_command_background.x = @party_command_window.x
    @party_command_background.y = @party_command_window.y
  end
  #--------------------------------------------------------------------------
  # * Create Actor Commands Window
  #--------------------------------------------------------------------------
  alias michael_create_actor_command_window create_actor_command_window
  def create_actor_command_window
    michael_create_actor_command_window
    @actor_command_background = Sprite.new(@background_viewport)
    @actor_command_background.x = @actor_command_window.x
    @actor_command_background.y = @actor_command_window.y
  end


  #--------------------------------------------------------------------------
  # * Create Help Window
  #--------------------------------------------------------------------------
  alias michael_create_help_window create_help_window
  def create_help_window
    michael_create_help_window
    @help_background = Sprite.new(@background_viewport)
    @help_background.x = @help_window.x
    @help_background.y = @help_window.y
    @help_background.visible = false
  end
  #--------------------------------------------------------------------------
  # * Create Skill Window
  #--------------------------------------------------------------------------
  alias michael_create_skill_window create_skill_window
  def create_skill_window
    michael_create_skill_window
    @skill_background = Sprite.new(@background_viewport)
    @skill_background.x = @skill_window.x
    @skill_background.y = @skill_window.y
    @skill_background.visible = false
  end
  #--------------------------------------------------------------------------
  # * Create Item Window
  #--------------------------------------------------------------------------
  alias michael_create_item_window create_item_window
  def create_item_window
    michael_create_item_window
    @item_background = Sprite.new(@background_viewport)
    @item_background.x = @item_window.x
    @item_background.y = @item_window.y
    @item_background.visible = false
  end
  #--------------------------------------------------------------------------
  # * Create Actor Window
  #--------------------------------------------------------------------------
  alias michael_create_actor_window create_actor_window
  def create_actor_window
    michael_create_actor_window
    @actor_background = Sprite.new(@background_viewport)
    @actor_background.x = @actor_window.x
    @actor_background.y = @actor_window.y
    @actor_background.visible = false
  end
  #--------------------------------------------------------------------------
  # * Create Enemy Window
  #--------------------------------------------------------------------------
  alias michael_create_enemy_window create_enemy_window
  def create_enemy_window
    michael_create_enemy_window
    @enemy_background = Sprite.new(@background_viewport)
    @enemy_background.x = @enemy_window.x
    @enemy_background.y = @enemy_window.y
    @enemy_background.visible = false
  end

  #--------------------------------------------------------------------------
  # * Start Party Command Selection
  #--------------------------------------------------------------------------
  alias michael_start_party_command_selection start_party_command_selection
  def start_party_command_selection
    michael_start_party_command_selection
    unless scene_changing?
      if BattleManager.input_start
        @status_background.x = 128
      else
        @status_background.x = 0
      end
    end
  end
  #--------------------------------------------------------------------------
  # * Start Actor Command Selection
  #--------------------------------------------------------------------------
  alias michael_start_actor_command_selection start_actor_command_selection
  def start_actor_command_selection
    michael_start_actor_command_selection
    @status_background.x = 0
  end

  #--------------------------------------------------------------------------
  # * [Skill] Command
  #--------------------------------------------------------------------------
  alias michael_command_skill command_skill
  def command_skill
    michael_command_skill
    @skill_background.visible = true
  end
  #--------------------------------------------------------------------------
  # * [Item] Command
  #--------------------------------------------------------------------------
  alias michael_command_item command_item
  def command_item
    michael_command_item
    @item_background.visible = true
  end
  #--------------------------------------------------------------------------
  # * Start Actor Selection
  #--------------------------------------------------------------------------
  alias michael_select_actor_selection select_actor_selection
  def select_actor_selection
    michael_select_actor_selection
    @actor_background.visible = true

  end
  #--------------------------------------------------------------------------
  # * Actor [OK]
  #--------------------------------------------------------------------------
  alias michael_on_actor_ok on_actor_ok
  def on_actor_ok
    @actor_background.visible = false
    @skill_background.visible = false
    @item_background.visible = false
    michael_on_actor_ok
  end
  #--------------------------------------------------------------------------
  # * Actor [Cancel]
  #--------------------------------------------------------------------------
  alias michael_on_actor_cancel on_actor_cancel
  def on_actor_cancel
    @actor_background.visible = false
    michael_on_actor_cancel
    case @actor_command_window.current_symbol
    when :skill
      @skill_background.visible = true
    when :item
      @item_background.visible = true
    end
  end
  #--------------------------------------------------------------------------
  # * Start Enemy Selection
  #--------------------------------------------------------------------------
  alias michael_select_enemy_selection select_enemy_selection
  def select_enemy_selection
    michael_select_enemy_selection
    @enemy_background.visible = true
  end
  #--------------------------------------------------------------------------
  # * Enemy [OK]
  #--------------------------------------------------------------------------
  alias michael_on_enemy_ok on_enemy_ok
  def on_enemy_ok
    @item_background.visible = false
    @skill_background.visible = false
    @enemy_background.visible = false
    michael_on_enemy_ok
  end
  #--------------------------------------------------------------------------
  # * Enemy [Cancel]
  #--------------------------------------------------------------------------
  alias michael_on_enemy_cancel on_enemy_cancel
  def on_enemy_cancel
    @enemy_background.visible = false
    case @actor_command_window.current_symbol
    when :attack
    when :skill
      @skill_background.visible = true
    when :item
      @item_background.visible = true
    end
    michael_on_enemy_cancel
  end
  #--------------------------------------------------------------------------
  # * Skill [OK]
  #--------------------------------------------------------------------------
  alias michael_on_skill_ok on_skill_ok
  def on_skill_ok
    michael_on_skill_ok
    if !@skill_window.item.need_selection?
      @skill_background.visible = false
    end
  end
  #--------------------------------------------------------------------------
  # * Skill [Cancel]
  #--------------------------------------------------------------------------
  alias michael_on_skill_cancel on_skill_cancel
  def on_skill_cancel
    @skill_background.visible = false
    michael_on_skill_cancel
  end
  #--------------------------------------------------------------------------
  # * Item [OK]
  #--------------------------------------------------------------------------
  alias michael_on_item_ok on_item_ok
  def on_item_ok
    michael_on_item_ok
    if !@item_window.item.need_selection?
      @item_background.visible = false
    end
  end
  #--------------------------------------------------------------------------
  # * Item [Cancel]
  #--------------------------------------------------------------------------
  alias michael_on_item_cancel on_item_cancel
  def on_item_cancel
    @item_background.visible = false
    michael_on_item_cancel
  end

  #--------------------------------------------------------------------------
  # * Start Turn
  #--------------------------------------------------------------------------
  alias michael_turn_start turn_start
  def turn_start
    @party_command_background.visible = false
    @actor_command_background.visible = false
    @status_background.x = 64
    michael_turn_start
  end

end

#===============================================================================
# DataManager
#===============================================================================
module DataManager
  class << self
   alias michael_create_game_objects create_game_objects
  end
  def self.create_game_objects
    michael_create_game_objects
    #Default setting = false
    $game_switches[100...100 +
    Windows_Changer::Number_Of_Element +
    Windows_Changer::Number_Of_Element] = false
  end
end

#===============================================================================
# Game Interpreter
#===============================================================================
class Game_Interpreter
  def window_off(i)
    $game_switches[i + 100] = false
  end
  def window_on(i, name)
    $game_switches[i + 100] = true
    $game_message.game_windows_name[i] = "#{name}"
  end
  def window_change(i, name)
    $game_message.game_windows_name[i] = "#{change}"
  end

  def window_default(i)
    $game_switches[i + Windows_Changer::Number_Of_Element + 100] = false
  end

  def window_center(i)
    $game_switches[i + Windows_Changer::Number_Of_Element + 100] = true
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
end

