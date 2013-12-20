#==============================================================================
#
# Michael Windows Changer
# Last Updated: 2013.12.19
# Requirement: RPG Maker AVE
#==============================================================================

#==============================================================================
#  Updates
#==============================================================================
# 2013.12.19 - Works for Windows_BattleStatus
#
#==============================================================================
# Description
#==============================================================================
# This script is used to stick image(s) to windows with your desired image(s)
# by overloading all windows.
#
#==============================================================================
# Installation
#==============================================================================
# - This script will OVERLOAD all windows.
# - Place this script to be below other overloading windows script. If you are
#   not sure where, place it to be the lowest of the material section.
# - If you have a bust script, put the bust script anywhere below this script.
# - Create new folder called 'Windows' at this address
#   <your project>/Graphics/
# - Create another folder based on the typed of windows you want to change
#   <your project>/Graphics/Windows/
# - Place the window Images (by default) in that folder
#   <your project>/Graphics/Windows/(type of windows)/
# - Yes, you need to create a folder for every windows tpe that you want to
#   change
#==============================================================================

#==============================================================================

module Windows_Changer

  #============================================================================
  # Windows Changer - Set false for deactivate, set true for activation.
  # Default Setting = all changer deactivated
  # This is for Original Windows - Scroll Down for Windows from other scripts
  #============================================================================
  Windows_Changer_Array = [
  Window_Selectable_Changer =
  false, #Element 0
  Window_Command_Changer =
  false, #Element 1
  Window_HorzCommand_Changer =
  false, #Element 2
  Window_Help_Changer =
  false, #Element 3
  Window_Gold_Changer =
  false, #Element 4
  Window_MenuCommand_Changer =
  false, #Element 5
  Window_MenuStatus_Changer =
  false, #Element 6
  Window_MenuActor_Changer =
  false, #Element 7
  Window_ItemCategory_Changer =
  false, #Element 8
  Window_ItemList_Changer =
  false, #Element 9
  Window_SkillCommand_Changer =
  false, #Element 10
  Window_SkillStatus_Changer =
  false, #Element 11
  Window_SkillList_Changer =
  false, #Element 12
  Window_EquipStatus_Changer =
  false, #Element 13
  Window_EquipCommand_Changer =
  false, #Element 14
  Window_EquipSlot_Changer =
  false, #Element 15
  Window_EquipItem_Changer =
  false, #Element 16
  Window_Status_Changer =
  false, #Element 17
  Window_SaveFile_Changer =
  false, #Element 18
  Window_ShopCommand_Changer =
  false, #Element 19
  Window_ShopBu_Changer =
  false, #Element 20
  Window_ShopSell_Changer =
  false, #Element 21
  Window_ShopNumber_Changer =
  false, #Element 22
  Window_ShopStatus_Changer =
  false, #Element 23
  Window_NameEdit_Changer =
  false, #Element 24
  Window_NameInput_Changer =
  false, #Element 25
  Window_ChoiceList_Changer =
  false, #Element 26
  Window_NumberInput_Changer =
  false, #Element 27
  Window_KeyItem_Changer =
  false, #Element 28
  Window_Message_Changer =
  false, #Element 29
  Window_ScrollText_Changer =
  false, #Element 30
  Window_MapName_Changer =
  false, #Element 31
  Window_BattleLog_Changer =
  false, #Element 32
  Window_PartyCommand_Changer =
  false, #Element 33
  Window_ActorCommand_Changer =
  false, #Element 34
  Window_BattleStatus_Changer =
  false, #Element 35
  Window_BattleActor_Changer =
  false, #Element 36
  Window_BattleEnemy_Changer =
  false, #Element 37
  Window_BattleSkill_Changer =
  false, #Element 38
  Window_BattleItem_Changer =
  false, #Element 39
  Window_TitleCommand_Changer =
  false, #Element 40
  Window_GameEnd_Changer =
  false, #Element 41
  Window_DebugLeft_Changer =
  false, #Element 42
  Window_DebugRight_Changer =
  false, #Element 43
  ]
=begin
>>>>>>>>>>>>>>>>>> Ignore this for now <<<<<<<<<<<<<<
  #============================================================================
  # Windows Changer - For Yanfly Ace Battle Engine - Set 0 or 1
  #============================================================================
  Window_PartyCommand_Changer = 0
  Window_ActorCommand_Changer = 0
  Window_BattleStatus_Changer = 1  #set 0 to return to original windows
  Window_BattleActor_Changer = 0
  Window_BattleStatusAid_Changer = 0
  Window_BattleEnemy_Changer = 0
  Window_BattleHelp_Changer = 0
  Window_BattleLog_Changer = 0
  Window_SkillList_Changer = 0
  Window_ItemList_Changer = 0
=end
  #============================================================================
  # Windows Folder - This is where the folders are
  #============================================================================
  Windows_Changer_Folder_Array = [
  Window_Selectable_Folder = "Window_Selectable",
  Window_Command_Folder = "Window_Command",
  Window_HorzCommand_Folder = "Window_HorzCommand",
  Window_Help_Folder = "Window_Help",
  Window_Gold_Folder = "Window_Gold",
  Window_MenuCommand_Folder = "Window_MenuCommand",
  Window_MenuStatus_Folder = "Window_MenuStatus",
  Window_MenuActor_Folder = "Window_MenuActor",
  Window_ItemCategory_Folder = "Window_ItemCategory",
  Window_ItemList_Folder = "Window_ItemList",
  Window_SkillCommand_Folder = "Window_SkillCommand",
  Window_SkillStatus_Folder = "Window_SkillStatus",
  Window_SkillList_Folder = "Window_SkillList",
  Window_EquipStatus_Folder = "Window_EquipStatus",
  Window_EquipCommand_Folder = "Window_EquipCommand",
  Window_EquipSlot_Folder = "Window_EquipSlot",
  Window_EquipItem_Folder = "Window_EquipItem",
  Window_Status_Folder = "Window_Status",
  Window_SaveFile_Folder = "Window_SaveFile",
  Window_ShopCommand_Folder = "Window_ShopCommand",
  Window_ShopBu_Folder = "Window_ShopBu",
  Window_ShopSell_Folder = "Window_ShopSell",
  Window_ShopNumber_Folder = "Window_ShopNumber",
  Window_ShopStatus_Folder = "Window_ShopStatus",
  Window_NameEdit_Folder = "Window_NameEdit",
  Window_NameInput_Folder = "Window_NameInput",
  Window_ChoiceList_Folder = "Window_ChoiceList",
  Window_NumberInput_Folder = "Window_NumberInput",
  Window_KeyItem_Folder = "Window_KeyItem",
  Window_Message_Folder = "Window_Message",
  Window_ScrollText_Folder = "Window_ScrollText",
  Window_MapName_Folder = "Window_MapName",
  Window_BattleLog_Folder = "Window_BattleLog",
  Window_PartyCommand_Folder = "Window_PartyCommand",
  Window_ActorCommand_Folder = "Window_ActorCommand",
  Window_BattleStatus_Folder = "Window_BattleStatus",
  Window_BattleActor_Folder = "Window_BattleActor",
  Window_BattleEnemy_Folder = "Window_BattleEnemy",
  Window_BattleSkill_Folder = "Window_BattleSkill",
  Window_BattleItem_Folder = "Window_BattleItem",
  Window_TitleCommand_Folder = "Window_TitleCommand",
  Window_GameEnd_Folder = "Window_GameEnd",
  Window_DebugLeft_Folder = "Window_DebugLeft",
  Window_DebugRight_Folder = "Window_DebugRight"
  ]
=begin
  #============================================================================
  # Yanfly Windows Folder - For Yanfly Ace Battle Engine - Set 0 or 1
  #============================================================================
  Window_PartyCommand_Folder = "Window_PartyCommand"
  Window_ActorCommand_Folder = "Window_ActorCommand"
  Window_BattleStatus_Folder = 'Window_BattleStatus'
  Window_BattleActor_Folder = "Window_BattleActor"
  Window_BattleStatusAid_Folder = "Window_BattleStatusAid"
  Window_BattleEnemy_Folder = "Window_BattleEnemy"
  Window_BattleHelp_Folder = "Window_BattleHelp"
  Window_BattleLog_Folder = "Window_BattleLog"
  Window_SkillList_Folder = "Window_SkillList"
  Window_ItemList_Folder = "Window_ItemList"
=end
end

#==============================================================================
# Cache
#==============================================================================
module Cache
  def self.cache_extended(folder, filename)
    load_bitmap("Graphics/Windows/#{folder}/", filename)
  end
end

#==============================================================================
# Game_Message
#==============================================================================
class Game_Message

  #============================================================================
  # Default Windows
  #============================================================================
  attr_accessor :window_Selectable_Folder
  attr_accessor :window_Command_Folder
  attr_accessor :window_HorzCommand_Folder
  attr_accessor :window_Help_Folder
  attr_accessor :window_Gold_Folder
  attr_accessor :window_MenuCommand_Folder
  attr_accessor :window_MenuStatus_Folder
  attr_accessor :window_MenuActor_Folder
  attr_accessor :window_ItemCategory_Folder
  attr_accessor :window_ItemList_Folder
  attr_accessor :window_SkillCommand_Folder
  attr_accessor :window_SkillStatus_Folder
  attr_accessor :window_SkillList_Folder
  attr_accessor :window_EquipStatus_Folder
  attr_accessor :window_EquipCommand_Folder
  attr_accessor :window_EquipSlot_Folder
  attr_accessor :window_EquipItem_Folder
  attr_accessor :window_Status_Folder
  attr_accessor :window_SaveFile_Folder
  attr_accessor :window_ShopCommand_Folder
  attr_accessor :window_ShopBu_Folder
  attr_accessor :window_ShopSell_Folder
  attr_accessor :window_ShopNumber_Folder
  attr_accessor :window_ShopStatus_Folder
  attr_accessor :window_NameEdit_Folder
  attr_accessor :window_NameInput_Folder
  attr_accessor :window_ChoiceList_Folder
  attr_accessor :window_NumberInput_Folder
  attr_accessor :window_KeyItem_Folder
  attr_accessor :window_Message_Folder
  attr_accessor :window_ScrollText_Folder
  attr_accessor :window_MapName_Folder
  attr_accessor :window_BattleLog_Folder
  attr_accessor :window_PartyCommand_Folder
  attr_accessor :window_ActorCommand_Folder
  attr_accessor :window_BattleStatus_Folder
  attr_accessor :window_BattleActor_Folder
  attr_accessor :window_BattleEnemy_Folder
  attr_accessor :window_BattleSkill_Folder
  attr_accessor :window_BattleItem_Folder
  attr_accessor :window_TitleCommand_Folder
  attr_accessor :window_GameEnd_Folder
  attr_accessor :window_DebugLeft_Folder
  attr_accessor :window_DebugRight_Folder

  alias a_lias initialize

  def initialize
    a_lias
    @window_Selectable_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[0]
    @window_Command_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[1]
    @window_HorzCommand_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[2]
    @window_Help_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[3]
    @window_Gold_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[4]
    @window_MenuCommand_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[5]
    @window_MenuStatus_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[6]
    @window_MenuActor_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[7]
    @window_ItemCategory_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[8]
    @window_ItemList_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[9]
    @window_SkillCommand_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[10]
    @window_SkillStatus_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[11]
    @window_SkillList_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[12]
    @window_EquipStatus_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[13]
    @window_EquipCommand_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[14]
    @window_EquipSlot_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[15]
    @window_EquipItem_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[16]
    @window_Status_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[17]
    @window_SaveFile_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[18]
    @window_ShopCommand_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[19]
    @window_ShopBu_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[20]
    @window_ShopSell_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[21]
    @window_ShopNumber_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[22]
    @window_ShopStatus_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[23]
    @window_NameEdit_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[24]
    @window_NameInput_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[25]
    @window_ChoiceList_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[26]
    @window_NumberInput_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[27]
    @window_KeyItem_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[28]
    @window_Message_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[29]
    @window_ScrollText_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[30]
    @window_MapName_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[31]
    @window_BattleLog_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[32]
    @window_PartyCommand_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[33]
    @window_ActorCommand_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[34]
    @window_BattleStatus_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[35]
    @window_BattleActor_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[36]
    @window_BattleEnemy_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[37]
    @window_BattleSkill_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[38]
    @window_BattleItem_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[39]
    @window_TitleCommand_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[40]
    @window_GameEnd_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[41]
    @window_DebugLeft_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[42]
    @window_DebugRight_Folder =
    Windows_Changer::Windows_Changer_Folder_Array[43]
  end
end

#==============================================================================
# Creating Directory
#==============================================================================

#==============================================================================
# Window_BattleStatus_Changer
#==============================================================================

if (Windows_Changer::Windows_Changer_Array[35] == true)

  #============================================================================
  # Scene_Battle
  #----------------------------------------------------------------------------

  class Scene_Battle < Scene_Base
    #--------------------------------------------------------------------------
    #  Create Party Commands Window
    #--------------------------------------------------------------------------
    alias party_command_window_changer create_party_command_window
    def create_party_command_window
      party_command_window_changer
      @party_command_window.back_opacity = 0
      @party_command_window.opacity = 0
    end
    #--------------------------------------------------------------------------
    #  Create Actor Commands Window
    #--------------------------------------------------------------------------
    alias actor_command_window_changer create_actor_command_window
    def create_actor_command_window
      actor_command_window_changer
      @actor_command_window.back_opacity = 0
      @actor_command_window.opacity = 0
    end
  end
  #============================================================================
  # Window_BattleStatus
  #----------------------------------------------------------------------------
  class Window_BattleStatus < Window_Selectable
    #--------------------------------------------------------------------------
    #  Object Initialization
    #--------------------------------------------------------------------------
    alias i_ini initialize
    def initialize
      i_ini
      self.back_opacity = 0
      self.opacity = 0
      @viewport = Viewport.new
      @status_bar = Sprite.new(@viewport)
      folder = $game_message.window_BattleStatus_Folder
      name = "Mockup.png" #Set your pic here
                          #A new update will come out later so you could use
                          #different pictures, but for now this will do.
      @status_bar_bitmap = Cache.cache_extended(folder, name)
      #@status_bar_bitmap = Bitmap.new(Cache.cache_extended(folder, name))
      @status_bar.bitmap = @status_bar_bitmap
      @status_bar.x = 0
      @status_bar.y = 0
    end
  end
end

