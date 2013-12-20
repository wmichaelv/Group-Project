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
# - Place the window Images (by default) in that folder
#   <your project>/Graphics/Windows/(type of windows)/
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
  true, #Element 35
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
  Window_ShopBu_Folder = "Graphics\\Windows\\Window_ShopBu",
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
  Window_DebugRight_Folder = "Graphics\\Windows\\Window_DebugRight"
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
    load_bitmap("#{folder}/", filename)
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

  alias a_lias initialize

  def initialize
    a_lias
    @game_message_windows_folder =
    Windows_Changer::Windows_Changer_Folder_Array

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
  # * Initialize Module
  #--------------------------------------------------------------------------
  def self.init
    a_lias
    create_Windows_Changer_directory
  end

  def self.create_Windows_Changer_directory
    $game_message.game_message_windows_folder.each do |folder|
      @windows_directory = folder
      if !File.exists?(@windows_directory)
        Dir.mkdir(@windows_directory)
      end
    end
  end
end

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
      folder = $game_message.game_message_windows_folder[35]
      name = "Mockup.png" #Set your pic here
                          #A new update will come out later so you could use
                          #different pictures, but for now this will do.
      @status_bar_bitmap = Cache.cache_extended(folder, name)
      @status_bar.bitmap = @status_bar_bitmap
      @status_bar.x = 0
      @status_bar.y = 0
    end
  end
end

