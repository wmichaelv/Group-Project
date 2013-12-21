
#==============================================================================
#
# Michael Windows Changer
# Last Updated: 2013.12.21
# Requirement: RPG Maker VX Ace
#             -Knowledge of 'how to using scripts'
#             -Knowledge of Window Designation (basically know which window is
#              which)
#==============================================================================

#==============================================================================
#  Biography lol
#==============================================================================
# 2013.12.21 --Installing Game_Interpreter
#            --Scene_Battle is completed
#            --Scene_Debug is completed
#            --Scene_Name is completed
# 2013.12.20 --Overloading Scene_Battle
# 2013.12.19 --Works for Windows_BattleStatus
# 2013.12.18 --Script is initialized
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
  # Windows Changer = USE Game_Interpret for activation (scroll all the way
  #                   down for the key words (window_on and window_off))
  # Use the element list below for 'i'.
  #  For ex:
  #   window_on(5,'ex.jpg') -> activate window #5 background(window_gold_changer)
  #                            with ex.jpg as the content
  #
  # Default Switch = off (switch only available for activate windows)
  # This is for Original Windows - Scroll Down for Windows from other scripts
  #============================================================================
  Windows_Changer_Array = [
  Default_Window_This_is_Extra_Do_Not_Delete_Unless_You_Know_What_You_Do =
  false, #Element 0 Don't tweak this one for the sake of harmony :D
  Window_Selectable_Changer =
  false, #Element 1
  Window_Command_Changer =
  false, #Element 2
  Window_HorzCommand_Changer =
  false, #Element 3
  Window_Help_Changer =
  false, #Element 4
  Window_Gold_Changer =
  false, #Element 5
  Window_MenuCommand_Changer =
  false, #Element 6
  Window_MenuStatus_Changer =
  false, #Element 7
  Window_MenuActor_Changer =
  false, #Element 8
  Window_ItemCategory_Changer =
  false, #Element 9
  Window_ItemList_Changer =
  false, #Element 10
  Window_SkillCommand_Changer =
  false, #Element 11
  Window_SkillStatus_Changer =
  false, #Element 12
  Window_SkillList_Changer =
  false, #Element 13
  Window_EquipStatus_Changer =
  false, #Element 14
  Window_EquipCommand_Changer =
  false, #Element 15
  Window_EquipSlot_Changer =
  false, #Element 16
  Window_EquipItem_Changer =
  false, #Element 17
  Window_Status_Changer =
  false, #Element 18
  Window_SaveFile_Changer =
  false, #Element 19
  Window_ShopCommand_Changer =
  false, #Element 20
  Window_ShopBu_Changer =
  false, #Element 21
  Window_ShopSell_Changer =
  false, #Element 22
  Window_ShopNumber_Changer =
  false, #Element 23
  Window_ShopStatus_Changer =
  false, #Element 24
  Window_NameEdit_Changer =
  false, #Element 25
  Window_NameInput_Changer =
  false, #Element 26
  Window_ChoiceList_Changer =
  false, #Element 27
  Window_NumberInput_Changer =
  false, #Element 28
  Window_KeyItem_Changer =
  false, #Element 29
  Window_Message_Changer =
  false, #Element 30
  Window_ScrollText_Changer =
  false, #Element 31
  Window_MapName_Changer =
  false, #Element 32
  Window_BattleLog_Changer =
  false, #Element 33
  Window_PartyCommand_Changer =
  false, #Element 34
  Window_ActorCommand_Changer =
  false, #Element 35
  Window_BattleStatus_Changer =
  false, #Element 36
  Window_BattleActor_Changer =
  false, #Element 37
  Window_BattleEnemy_Changer =
  false, #Element 38
  Window_BattleSkill_Changer =
  false, #Element 39
  Window_BattleItem_Changer =
  false, #Element 40
  Window_TitleCommand_Changer =
  false, #Element 41
  Window_GameEnd_Changer =
  false, #Element 42
  Window_DebugLeft_Changer =
  false, #Element 43
  Window_DebugRight_Changer =
  false, #Element 44
  Window_Base_Changer =
  false, #Element 45
  ]  #Add more windows here

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
  Window_DebugRight_Folder = "Graphics\\Windows\\Window_DebugRight",
  Window_Base_Folder = "Graphics\\Windows\\Window_Base",
  ]
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
  attr_accessor :game_windows_name

  alias a_lias initialize

  def initialize
    a_lias
    @game_message_windows_folder =
    Windows_Changer::Windows_Changer_Folder_Array
    @game_windows_name = ""

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
# ** Scene_Name
#------------------------------------------------------------------------------
#  This class performs name input screen processing.
#==============================================================================

class Scene_Name < Scene_MenuBase
  #--------------------------------------------------------------------------
  # * Start Processing
  #--------------------------------------------------------------------------
  alias michael_start start
  def start
    michael_start
    @background_viewport = Viewport.new
    @edit_background = Sprite.new(@background_viewport)
    @edit_background.x = @edit_window.x
    @edit_background.y = @edit_window.y
    if $game_switches[125]
      @edit_window.back_opacity = 0
      @edit_window.opacity = 0
      folder = $game_message.game_message_windows_folder[25]
      name = $game_message.game_windows_name
      @edit_background.bitmap = Cache.cache_extended(folder, name)
      @edit_background.src_rect.width = @edit_window.width
      @edit_background.visible = true
    end
    @input_background = Sprite.new(@background_viewport)
    @input_background.x = @input_window.x
    @input_background.y = @input_window.y
    if $game_switches[126]
      @input_window.back_opacity = 0
      @input_window.opacity = 0
      folder = $game_message.game_message_windows_folder[26]
      name = $game_message.game_windows_name
      @input_background.bitmap = Cache.cache_extended(folder, name)
      @input_background.src_rect.width = @input_window.width
      @input_background.visible = true
    end
  end
end


#==============================================================================
# ** Scene_Debug
#------------------------------------------------------------------------------
#  This class performs debug screen processing.
#==============================================================================

class Scene_Debug < Scene_MenuBase
  #--------------------------------------------------------------------------
  # * Start Processing
  #--------------------------------------------------------------------------
  alias michael_start start
  def start
    create background_viewport
    michael_start
  end


  def create_background_viewport
    @background_viewport = Viewport.new
  end

  #--------------------------------------------------------------------------
  # * Termination Processing
  #--------------------------------------------------------------------------
  alias michael_terminate terminate
  def terminate
    @background_viewport.dispose
    @left_background.dispose
    @right_background.dispose
    @debug_help_background.dispose
    @temp1.dispose
    @temp2.dispose
    michael_terminate
  end
  #--------------------------------------------------------------------------
  # * Create Left Window
  #--------------------------------------------------------------------------
  alias michael_create_left_window create_left_window
  def create_left_window
    michael_create_left_window
    @left_background = Sprite.new(@background_viewport)
    @left_background.x = @left_window.x
    @left_background.y = @left_window.y
    @temp1 = @left_background.back_opacity
    @temp2 = @left_background.opacity
  end
  #--------------------------------------------------------------------------
  # * Create Right Window
  #--------------------------------------------------------------------------
  alias michael_create_right_window create_right_window
  def create_right_window
    michael_create_right_window
    @right_background = Sprite.new(@background_viewport)
    @right_background.x = @right_window.x
    @right_background.y = @right_window.y
  end
  #--------------------------------------------------------------------------
  # * Create Help Window
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
      name = $game_message.game_windows_name
      @left_background.bitmap = Cache.cache_extended(folder, name)
      @left_background.src_rect.width = @left_window.width
      @left_background.visible = true
    else
      @left_window.back_opacity = @temp1
      @left_window.opacity = @temp2
      @left_background.visible = false
    end
    if $game_switches[144]
      @right_window.back_opacity = 0
      @right_window.opacity = 0
      folder = $game_message.game_message_windows_folder[44]
      name = $game_message.game_windows_name
      @right_background.bitmap = Cache.cache_extended(folder, name)
      @right_background.src_rect.width = @right_window.width
      @right_background.visible = true
    else
      @right_window.back_opacity = @temp1
      @right_window.opacity = @temp2
      @right_background.visible = false
    end
    if $game_switches[145]
      @debug_help_window.back_opacity = 0
      @debug_help_window.opacity = 0
      folder = $game_message.game_message_windows_folder[45]
      name = $game_message.game_windows_name
      @debug_help_background.bitmap = Cache.cache_extended(folder, name)
      @debug_help_background.src_rect.width = @debug_help_window.width
      @debug_help_background.visible = true
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

  def terminate
    super
    dispose_spriteset
    @info_viewport.dispose
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
    @temp1.dispose
    @temp2.dispose
    RPG::ME.stop
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
      name = $game_message.game_windows_name
      @help_background.bitmap = Cache.cache_extended(folder, name)
      @help_background.src_rect.width = @help_window.width
      @help_background.visible = true
    else
      @help_window.back_opacity = @temp1
      @help_window.opacity = @temp2
      @help_background.visible = false
    end
    if $game_switches[130]
      @message_window.back_opacity = 0
      @message_window.opacity = 0
      folder = $game_message.game_message_windows_folder[30]
      name = $game_message.game_windows_name
      @message_background.bitmap = Cache.cache_extended(folder, name)
      @message_background.src_rect.width = @message_window.width
      @message_background.visible = true
    else
      @message_window.back_opacity = @temp1
      @message_window.opacity = @temp2
      @message_background.visible = false
    end
    if $game_switches[131]
      @scroll_text_window.back_opacity = 0
      scroll_text_window.opacity = 0
      folder = $game_message.game_message_windows_folder[31]
      name = $game_message.game_windows_name
      @scroll_text_background.bitmap = Cache.cache_extended(folder, name)
      @scroll_text_background.src_rect.width = @scroll_text_window.width
      @scroll_text_background.visible = true
    else
      @scroll_text_window.back_opacity = @temp1
      @scroll_text_window.opacity = @temp2
      @scroll_text_background.visible = false
    end
    if $game_switches[133]
      @log_window.back_opacity = 0
      @log_window.opacity = 0
      folder = $game_message.game_message_windows_folder[33]
      name = $game_message.game_windows_name
      @log_background.bitmap = Cache.cache_extended(folder, name)
      @log_background.src_rect.width = @log_window.width
      @log_background.visible = true
    else
      #@log_window.back_opacity = @temp1
      #@log_window.opacity = @temp2
      @log_background.visible = false
    end
    if $game_switches[134]
      @party_command_window.back_opacity = 0
      @party_command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[34]
      name = $game_message.game_windows_name
      @party_command_background.bitmap = Cache.cache_extended(folder, name)
      @party_command_background.src_rect.width = @party_command_window.width
      @party_command_background.visible = true
    else
      @party_command_window.back_opacity = @temp1
      @party_command_window.opacity = @temp2
      @party_command_background.visible = false
    end
    if $game_switches[135]
      @actor_command_window.back_opacity = 0
      @actor_command_window.opacity = 0
      folder = $game_message.game_message_windows_folder[35]
      name = $game_message.game_windows_name
      @actor_command_background.bitmap = Cache.cache_extended(folder, name)
      @actor_command_background.src_rect.width = @actor_command_window.width
      @actor_command_background.visible = true
    else
      @actor_command_window.back_opacity = @temp1
      @actor_command_window.opacity = @temp2
      @actor_command_background.visible = false
    end
    if $game_switches[136]
      @status_window.back_opacity = 0
      @status_window.opacity = 0
      folder = $game_message.game_message_windows_folder[36]
      name = $game_message.game_windows_name
      @status_background.bitmap = Cache.cache_extended(folder, name)
      @status_background.src_rect.width = @status_window.width
      @status_background.visible = true
    else
      @status_window.back_opacity = @temp1
      @status_window.opacity = @temp2
      @status_background.visible = false
    end
    if $game_switches[137]
      @actor_window.back_opacity = 0
      @actor_window.opacity = 0
      folder = $game_message.game_message_windows_folder[37]
      name = $game_message.game_windows_name
      @actor_background.bitmap = Cache.cache_extended(folder, name)
      @actor_background.src_rect.width = @actor_window.width
      @actor_background.visible = true
    else
      @actor_window.back_opacity = @temp1
      @actor_window.opacity = @temp2
      @actor_background.visible = false
    end
    if $game_switches[138]
      @enemy_window.back_opacity = 0
      @enemy_window.opacity = 0
      folder = $game_message.game_message_windows_folder[38]
      name = $game_message.game_windows_name
      @enemy_background.bitmap = Cache.cache_extended(folder, name)
      @enemy_background.src_rect.width = @enemy_window.width
      @enemy_background.visible = true
    else
      @enemy_window.back_opacity = @temp1
      @enemy_window.opacity = @temp2
      @enemy_background.visible = false
    end
    if $game_switches[139]
      @skill_window.back_opacity = 0
      @skill_window.opacity = 0
      folder = $game_message.game_message_windows_folder[39]
      name = $game_message.game_windows_name
      @skill_background.bitmap = Cache.cache_extended(folder, name)
      @skill_background.src_rect.width = @skill_window.width
      @skill_background.visible = true
    else
      @skill_window.back_opacity = @temp1
      @skill_window.opacity = @temp2
      @skill_background.visible = false
    end
    if $game_switches[140]
      @item_window.back_opacity = 0
      @item_window.opacity = 0
      folder = $game_message.game_message_windows_folder[40]
      name = $game_message.game_windows_name
      @item_background.bitmap = Cache.cache_extended(folder, name)
      @item_background.src_rect.width = @item_window.width
      @item_background.visible = true
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
    @party_command_background = Sprite.new(@background_viewport2)
    @party_command_background.x = @party_command_window.x
    @party_command_background.y = @party_command_window.y
  end
  #--------------------------------------------------------------------------
  # * Create Actor Commands Window
  #--------------------------------------------------------------------------
  alias michael_create_actor_command_window create_actor_command_window
  def create_actor_command_window
    michael_create_actor_command_window
    @actor_command_background = Sprite.new(@background_viewport3)
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

    $game_switches[100..144] = false #Add more numbers if more windows added
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
    Windows_Changer::Windows_Changer_Array[i] = true
    $game_message.game_windows_name = name
  end
  def window_change(name)
    $game_message.game_windows_name = name
  end
end

