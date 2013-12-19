#==============================================================================
#
# Michael Windows Changer
# Last Updated: 2013.12.19
# Requirement: RPG Maker VX Ace
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
  # Windows Changer - Set 0 for deactivate, set 1 for activation.
  # Default Setting = all changer deactivated
  # This is for Original Windows - Scroll Down for Windows from other scripts
  #============================================================================

  Z_var = 200

  Window_Selectable_Changer = 0
  Window_Command_Changer = 0
  Window_HorzCommand_Changer = 0
  Window_Help_Changer = 0
  Window_Gold_Changer = 0
  Window_MenuCommand_Changer = 0
  Window_MenuStatus_Changer = 0
  Window_MenuActor_Changer = 0
  Window_ItemCategory_Changer = 0
  Window_ItemList_Changer = 0
  Window_SkillCommand_Changer = 0
  Window_SkillStatus_Changer = 0
  Window_SkillList_Changer = 0
  Window_EquipStatus_Changer = 0
  Window_EquipCommand_Changer = 0
  Window_EquipSlot_Changer = 0
  Window_EquipItem_Changer = 0
  Window_Status_Changer = 0
  Window_SaveFile_Changer = 0
  Window_ShopCommand_Changer = 0
  Window_ShopBu_Changer = 0
  Window_ShopSell_Changer = 0
  Window_ShopNumber_Changer = 0
  Window_ShopStatus_Changer = 0
  Window_NameEdit_Changer = 0
  Window_NameInput_Changer = 0
  Window_ChoiceList_Changer = 0
  Window_NumberInput_Changer = 0
  Window_KeyItem_Changer = 0
  Window_Message_Changer = 0
  Window_ScrollText_Changer = 0
  Window_MapName_Changer = 0
  Window_BattleLog_Changer = 0
  Window_PartyCommand_Changer = 0
  Window_ActorCommand_Changer = 0
  Window_BattleStatus_Changer = 0
  Window_BattleActor_Changer = 0
  Window_BattleEnemy_Changer = 0
  Window_BattleSkill_Changer = 0
  Window_BattleItem_Changer = 0
  Window_TitleCommand_Changer = 0
  Window_GameEnd_Changer = 0
  Window_DebugLeft_Changer = 0
  Window_DebugRight_Changer = 0

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

  #============================================================================
  # Windows Folder - This is where the folders are
  #============================================================================
  Window_Selectable_Folder = "Window_Selectable"
  Window_Command_Folder = "Window_Command"
  Window_HorzCommand_Folder = "Window_HorzCommand"
  Window_Help_Folder = "Window_Help"
  Window_Gold_Folder = "Window_Gold"
  Window_MenuCommand_Folder = "Window_MenuCommand"
  Window_MenuStatus_Folder = "Window_MenuStatus"
  Window_MenuActor_Folder = "Window_MenuActor"
  Window_ItemCategory_Folder = "Window_ItemCategory"
  Window_ItemList_Folder = "Window_ItemList"
  Window_SkillCommand_Folder = "Window_SkillCommand"
  Window_SkillStatus_Folder = "Window_SkillStatus"
  Window_SkillList_Folder = "Window_SkillList"
  Window_EquipStatus_Folder = "Window_EquipStatus"
  Window_EquipCommand_Folder = "Window_EquipCommand"
  Window_EquipSlot_Folder = "Window_EquipSlot"
  Window_EquipItem_Folder = "Window_EquipItem"
  Window_Status_Folder = "Window_Status"
  Window_SaveFile_Folder = "Window_SaveFile"
  Window_ShopCommand_Folder = "Window_ShopCommand"
  Window_ShopBu_Folder = "Window_ShopBu"
  Window_ShopSell_Folder = "Window_ShopSell"
  Window_ShopNumber_Folder = "Window_ShopNumber"
  Window_ShopStatus_Folder = "Window_ShopStatus"
  Window_NameEdit_Folder = "Window_NameEdit"
  Window_NameInput_Folder = "Window_NameInput"
  Window_ChoiceList_Folder = "Window_ChoiceList"
  Window_NumberInput_Folder = "Window_NumberInput"
  Window_KeyItem_Folder = "Window_KeyItem"
  Window_Message_Folder = "Window_Message"
  Window_ScrollText_Folder = "Window_ScrollText"
  Window_MapName_Folder = "Window_MapName"
  Window_BattleLog_Folder = "Window_BattleLog"
  Window_PartyCommand_Folder = "Window_PartyCommand"
  Window_ActorCommand_Folder = "Window_ActorCommand"
  Window_BattleStatus_Folder = "Window_BattleStatus"
  Window_BattleActor_Folder = "Window_BattleActor"
  Window_BattleEnemy_Folder = "Window_BattleEnemy"
  Window_BattleSkill_Folder = "Window_BattleSkill"
  Window_BattleItem_Folder = "Window_BattleItem"
  Window_TitleCommand_Folder = "Window_TitleCommand"
  Window_GameEnd_Folder = "Window_GameEnd"
  Window_DebugLeft_Folder = "Window_DebugLeft"
  Window_DebugRight_Folder = "Window_DebugRight"

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
# Window_BattleStatus_Changer
#------------------------------------------------------------------------------

if (Windows_Changer::Window_BattleStatus_Changer != 0)

  class Game_Message
    attr_accessor :window_BattleStatus_folder

    alias a_lias initialize
    def initialize
      a_lias
      @window_BattleStatus_folder = Windows_Changer::Window_BattleStatus_Folder
    end
  end
  #============================================================================
  # Scene_Battle
  #----------------------------------------------------------------------------

  class Scene_Battle < Scene_Base
    #--------------------------------------------------------------------------
    #  Create Status Window
    #--------------------------------------------------------------------------
    alias status_window_changer create_status_window
    def create_status_window
      status_window_changer
      @status_window.back_opacity = 0
      @status_window.opacity = 0
    end
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
      @viewport = Viewport.new
      @status_bar = Sprite.new(@viewport)
      folder = $game_message.window_BattleStatus_folder
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
  else
end
