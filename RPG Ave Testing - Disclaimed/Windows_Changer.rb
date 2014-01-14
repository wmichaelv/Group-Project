
Disable_Flicker_Test = true

#==============================================================================
#
# Michael Windows Changer
# Last Updated: 2014.01.14
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
# - Big thanks to Mithran for the efficiency check and error analyzis
# - Other scripters in the discussion
#==============================================================================

#==============================================================================
# Self-To-Do-List
#==============================================================================
# Just take this as upcoming features
#
# - Fix the sprite resize feature
# - Do the sprite color feature
# - Do the sprite cursor feature
# - Do the window movement
# - Do the window resize
# - Do the animation attachment
#
#==============================================================================

#==============================================================================
# Script Biography lol
#==============================================================================
# 2013.01.14 --Fixed resize math
# 2013.01.13 --Enabled Psuedo name
# 2013.01.12 --Improve option on resize and add feature for color
# 2013.01.11 --Add feature to resizing picture based on height & width ratio / user input
# 2013.01.09 --Auto-Generate all Window sub-classes. -Add feature for auto and manual.
# 2013.01.08 --Can't keep track on what happened today.
# 2013.01.07 --FLICKER GOODBYE - flicker bug is fixed. 100% working. I'll give up if I found another  bug.
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
# 2013.12.24 --Script is uploaded << Ver. 1.0
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
#
# #====================== Only Make Window Transparent =======================#
#
#  - window_blank(window_type)
#  For Example:
#  window_blank(Window_Gold)
#             -> Make window_gold to be transparent (content is not transparent
#                though, you can still see your gold amount)
#
# #============================= On/Off Switch ===============================#
#
#  - window_on(window_type, 'file_name.extention_name')
#  For Example:
#  window_on(Window_Gold, 'ex.jpg')
#             -> activate Window_Gold background with ex.jpg as the content
#             -> If you want to change the picture, just do the same
#                thing, but use different file_name.
#
#  - window_off(window_type)
#  For Example:
#  window_off(Window_Gold)
#             -> deactivate Window_Gold background and its content
#             -> deactivating will hide the background and return the
#                window rectangle back to the boring blue color with its
#                redundant white padding.
#
# #================================ Nickname =================================#
#
#  - window_nickname(window_type, nickname)
#  For Example:
#  window_nickname(Window_Gold, 'gold')
#             -> introduce a nickname to Window_Gold. Next time you need to type
#                a window_type for Window_Gold, you could just use the nickname.
#             -> For example: window_on('gold', 'ex.jpg')
#             -> Please don't forget the quotation marks!
#             -> Don't do window_nickname('gold_lol', gold)
#             -> If you want to change the nickname, just do
#                window_nickname(Window_Gold, 'gold')
#
# #================================ Movement =================================#
#
#  - window_show_all(window_type)
#             -> JUST USE THIS COMMAND and window_on if you're confused with
#                coordination. Basically window_show_all will display
#                your picture from the center of the window.
#             -> Do I have to use this for every picture that's oversized?
#             -> No, just do window_on(Window_Help, 'ex.jpg', 'show_all') <<< see the 'show_all'?
#                (don't forget the quotation mark!)
#
#  - window_show_all_move(window_type, x, y)
#             -> To move from show_all position
#
#  - window_center(window_type)
#  For Example:
#  window_center(Window_Gold)
#             -> Move the Window_Gold background content to center position
#                Default position is at the center (272,208) of the graphic and
#                occupy the size of the graphic (if your picture has size
#                larger than the graphic (544 x 416), it will fill the graphic)
#             -> Make sure that switch is 'on' or else nothing would happen.
#
#  - window_move_full(window_type, x, y, width, height)
#  For Example:
#  window_move_full(Window_Gold, 24, -24, 400, 400)
#  -> TIPS: If you are not sure how to adjust, the coordinate, starts with
#           window_move first.
#  -> move the Window_Gold background content to (24,-24) position. Remember that
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
# #============================ Default ======================================#
#
#  - window_default(window_type)
#  For Example:
#  window_default(Window_Gold)
#              -> Turn off movement switch for Window_Gold background
#              -> This will return Window_Gold to the original position
#
# #============================= Depth =======================================#
#
#  - window_depth(window_type, depth)
#  For Example:
#  window_depth(Window_Gold, -1)
#               -> Increases the depthness of Window_Gold background content
#                  by -1, which means, if there's other window background
#                  in the graphic beside Window_Gold background, that window
#                  background will appear to be above Window_Gold background.
#               -> Make sure that switch is 'on' or else nothing would happen.
#
# #============================ Opacity ======================================#
#
# - window_opacity(window_type, opacity)
# For Example:
# window_opacity(Window_Gold, 0)
#               -> Set Window_Gold background opacity to 0 (100% transparent).
#               -> Opacity value is from 0 (fully see-through) to 255 (solid).
#               -> Make sure that switch is 'on' or else nothing would happen.
#               -> Default opacity is 255 when window background is on.
#
# #============================= Color =======================================#
#
# - window_color(window_type, red, green, blue, alpha)
#               -> I don't think I need to explain this one. .-.
#               -> Just remember that red, green, blue, alpha are from 0 - 255.
#
# #============================ Resizing =====================================#
# window_r_default(class_type) -> Default resize, taking the size of the window
# window_r_pixel(class_type, _zoom_x, _zoom_y) -> resize by full_size of the picture/bitmap/sprite
# window_r(class_type, _zoom_x, zoom_y) -> resize after resizing from window
# window_r_i(class_type, streched_width, streched_height) -> resize by integer (Window_Gold,200,200) -> resized into a box
# window_r_fit_w(class_type) -> resized based on window.width
# window_r_fit_h(class_type) -> resized based on window.height
#
# #============================== End ========================================#
#
#  Have Fun!
#
#==============================================================================

  #================ Gotta Insert the member function first! ================#

class Window

  def self.get_all_descendants

    ObjectSpace.each_object(Class).select { |klass| klass < self }

  end

end

module Wndw_Cgr #Window Changer

  #============================================================================
  #STARTING_SWITCH_POINT
  #Modify this number if script clash with other script(s)
  #If clash still happened, remove this script. Most likely I won't
  #be active for several months.
  #============================================================================

  SSP = 500

  #============================================================================
  #Folder_Name
  # - Fill it in if you want to keep the picture for 'ALL' windows in 1 folder.
  # - Default folder would be as many as Window types there are (at least 46 folders!)
  #============================================================================

  Folder_Name = ''

  #============================================================================
  #Special_Window
  # - Fill it in to keep special window in separate folder.
  # - How to fill-in
  #
  # Ex:
  # Special_Window = {Window_Base => 'folder_name',
  #                   Window_Selectable => 'folder_name',
  #                   Window_GameEnd => 'folder_name'}
  #
  #============================================================================

  Special_Window = {
                   }

  #============================================================================
  # Auto Mode: Default is true
  #            Change to false to add/change window manually
  #            If confused no need to read further! Get out from this script! >:(
  #============================================================================

  Auto = true

  if Auto

    ##============================ Auto Procedure =========================##

    Michael_Wndw_Bg_Ary = Hash.new {|h,k| h[k]=[]}

        #==================== Start Window Initializer =================#

    Michael_Wndw_Bg_Ary[Window] << 0                      #indexed for game_switch purpose

    Michael_Wndw_Bg_Ary[Window] << "file_name"

    Michael_Wndw_Bg_Ary[Window] << ((Folder_Name == '') ?  #Windows folder should be
    "Graphics\\Windows" : Folder_Name)                     #created unless user only
                                                           #want to put everything in folder.

          #================ z, opacity, modify_type ================#

    Michael_Wndw_Bg_Ary[Window] << nil << nil << ''

          #=========== x, y, rect_x, rect_y, rect_w, rect_h ==========#

    Michael_Wndw_Bg_Ary[Window] << nil << nil << nil << nil << nil << nil

          #================ extend(zoom) width, height ===============#

    Michael_Wndw_Bg_Ary[Window] << nil << nil

          #============== color :red :green :blue :alpha =============#

    Michael_Wndw_Bg_Ary[Window] << nil << nil << nil << nil

        #===================== End Window Initializer ==================#

      #================ Start Window Descendants Initializer =============#

    Window.get_all_descendants.each.with_index(1) do |derived_classes,i|
      Michael_Wndw_Bg_Ary[derived_classes] << i
      Michael_Wndw_Bg_Ary[derived_classes] << "file_name"
      Michael_Wndw_Bg_Ary[derived_classes] <<
      ((Special_Window.has_key?(derived_classes)) ?
      Special_Window[derived_classes] : (Folder_Name == '') ?
      "Graphics\\Windows\\#{derived_classes}" : Folder_Name)
      Michael_Wndw_Bg_Ary[derived_classes] << nil << nil << ''
      Michael_Wndw_Bg_Ary[derived_classes] << nil << nil << nil << nil << nil << nil
      Michael_Wndw_Bg_Ary[derived_classes] << nil << nil
      Michael_Wndw_Bg_Ary[derived_classes] << nil << nil << nil << nil
    end

      #================= End Window Descendants Initializer ==============#

      #============================= Psuedo List =========================#

      Wndw_Psuedo_Names = {}

  else

    ##=========================== Manual Procedure ========================##

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
    #  There might be some features that I haven't discussed here in the manual section
    #  but that's because I believe that you have read the auto-section first, and basically
    #  you should be able to see the pattern by now. If you couldn't see the pattern, then
    #  I would suggest that you play around with the auto first before start tweaking around.
    #
    #
    #==============================================================================

    #============================================================================
    # Windows Changer = USE Game_Interpret for activation (scroll all the way
    #                   down for the key words (window_on and window_off))
    # Use the element # list below for 'window #'.
    #
    # Default Switch = off (switch only available for activate windows)
    # This is for Original Windows - Scroll Down for Windows from other scripts
    # the array stores these values:
    # [window number,
    #  file_name,
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
    Michael_Wndw_Bg_Ary = { #Window Background Array
    Window =>
    [0,"Element #0","Graphics\\Windows",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_Base =>
    [1,"Element #1","Graphics\\Windows\\Window_Base",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_Selectable =>
    [2,"Element #2","Graphics\\Windows\\Window_Selectable",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_Command =>
    [3,"Element #3","Graphics\\Windows\\Window_Command",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_HorzCommand =>
    [4,"Element #4","Graphics\\Windows\\Window_HorzCommand",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_Help =>
    [5,"Element #5","Graphics\\Windows\\Window_Help",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_Gold =>
    [6,"Element #6","Graphics\\Windows\\Window_Gold",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_MenuCommand =>
    [7,"Element #7","Graphics\\Windows\\Window_MenuCommand",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_MenuStatus =>
    [8,"Element #8","Graphics\\Windows\\Window_MenuStatus",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_MenuActor =>
    [9,"Element #9","Graphics\\Windows\\Window_MenuActor",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ItemCategory =>
    [10,"Element #10","Graphics\\Windows\\Window_ItemCategory",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ItemList =>
    [11,"Element #11","Graphics\\Windows\\Window_ItemList",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_SkillCommand =>
    [12,"Element #12","Graphics\\Windows\\Window_SkillCommand",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_SkillStatus =>
    [13,"Element #13","Graphics\\Windows\\Window_SkillStatus",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_SkillList =>
    [14,"Element #14","Graphics\\Windows\\Window_SkillList",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_EquipStatus =>
    [15,"Element #15","Graphics\\Windows\\Window_EquipStatus",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_EquipCommand =>
    [16,"Element #16","Graphics\\Windows\\Window_EquipCommand",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_EquipSlot =>
    [17,"Element #17","Graphics\\Windows\\Window_EquipSlot",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_EquipItem =>
    [18,"Element #18","Graphics\\Windows\\Window_EquipItem",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_Status =>
    [19,"Element #19","Graphics\\Windows\\Window_Status",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_SaveFile =>
    [20,"Element #20","Graphics\\Windows\\Window_SaveFile",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ShopCommand =>
    [21,"Element #21","Graphics\\Windows\\Window_ShopCommand",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ShopBuy =>
    [22,"Element #22","Graphics\\Windows\\Window_ShopBuy",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ShopSell =>
    [23,"Element #23","Graphics\\Windows\\Window_ShopSell",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ShopNumber =>
    [24,"Element #24","Graphics\\Windows\\Window_ShopNumber",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ShopStatus =>
    [25,"Element #25","Graphics\\Windows\\Window_ShopStatus",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_NameEdit =>
    [26,"Element #26","Graphics\\Windows\\Window_NameEdit",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_NameInput =>
    [27,"Element #27","Graphics\\Windows\\Window_NameInput",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ChoiceList =>
    [28,"Element #28","Graphics\\Windows\\Window_ChoiceList",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_NumberInput =>
    [29,"Element #29","Graphics\\Windows\\Window_NumberInput",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_KeyItem =>
    [30,"Element #30","Graphics\\Windows\\Window_KeyItem",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_Message =>
    [31,"Element #31","Graphics\\Windows\\Window_Message",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ScrollText =>
    [32,"Element #32","Graphics\\Windows\\Window_ScrollText",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_MapName =>
    [33,"Element #33","Graphics\\Windows\\Window_MapName",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_BattleLog =>
    [34,"Element #34","Graphics\\Windows\\Window_BattleLog",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_PartyCommand =>
    [35,"Element #35","Graphics\\Windows\\Window_PartyCommand",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_ActorCommand =>
    [36,"Element #36","Graphics\\Windows\\Window_ActorCommand",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_BattleStatus =>
    [37,"Element #37","Graphics\\Windows\\Window_BattleStatus",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_BattleActor =>
    [38,"Element #38","Graphics\\Windows\\Window_BattleActor",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_BattleEnemy =>
    [39,"Element #39","Graphics\\Windows\\Window_BattleEnemy",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_BattleSkill =>
    [40,"Element #40","Graphics\\Windows\\Window_BattleSkill",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_BattleItem =>
    [41,"Element #41","Graphics\\Windows\\Window_BattleItem",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_TitleCommand =>
    [42,"Element #42","Graphics\\Windows\\Window_TitleCommand",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_GameEnd =>
    [43,"Element #43","Graphics\\Windows\\Window_GameEnd",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_DebugLeft =>
    [44,"Element #44","Graphics\\Windows\\Window_DebugLeft",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    Window_DebugRight =>
    [45,"Element #45","Graphics\\Windows\\Window_DebugRight",nil,nil,nil,nil,nil,nil,nil,nil,nil],
    }  #Add more elements manually here

    NOE = 46 #NUMBER_OF_ELEMENT
             #Modify this number as more elements are added
  end

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
  attr_accessor :michael_bg_vp
  attr_accessor :michael_bg_sp
  alias michael_Window_initialize initialize
  alias michael_Window_update update
  alias michael_Window_dispose dispose
  alias michael_sp_visible_asgn visible=
  alias michael_sp_openness_asgn openness=
  alias michael_sp_x_asgn x=
  alias michael_sp_y_asgn y=
  alias michael_sp_width width #To avoid flicker error
  alias michael_sp_width_asgn width=
  alias michael_sp_height height #To avoid flicker error
  alias michael_sp_height_asgn height=

  def initialize(x, y, width, height)

    self.oh_I_got_changed = false
    (Disable_Flicker_Test) ? create_michael_bg_sp : create_michael_bg_sp(x, y, width, height)
    michael_Window_initialize(x, y, width, height)
    create_michael_bg_vp
    self.michael_bg_sp.michael_sp_updt(self, $game_message.michael_wndw_bg_ary[self.class])

  end

  #============================ Start New Methods ============================#

  def create_michael_bg_vp

    self.michael_bg_vp = Viewport.new  #The only locations where new member functions are created
    self.michael_bg_vp.z = self.z - 1  #are class Window_Base, class Sprite, module Cache
                                       #and class Game_Interpreter. Everything else is aliased.
  end

  def create_michael_bg_sp(w_x = nil, w_y = nil, w_w = nil, w_h = nil)

    self.michael_bg_sp = Sprite.new
    self.michael_bg_sp.x = w_x unless w_x.nil?
    self.michael_bg_sp.y = w_y unless w_y.nil?
    self.michael_bg_sp.src_rect.width = w_w unless w_w.nil?
    self.michael_bg_sp.src_rect.height = w_h unless w_h.nil?

  end

  def did_I_get_changed?

    return self.oh_I_got_changed

  end

  def change_me_by_michael

    self.oh_I_got_changed = true

  end

  #============================= End New Methods =============================#

  def dispose                                  #Everything is disposed here
                                               #Basically every window made,
    self.michael_bg_sp.dispose                 #1 viewport and 1 sprite are also made
    self.michael_bg_vp.dispose
    michael_Window_dispose

  end

  def update

    michael_Window_update
    self.michael_bg_sp.michael_sp_updt(self, $game_message.michael_wndw_bg_ary[self.class])

  end

  def visible=(arg)

    self.michael_sp_visible_asgn(arg)
    self.michael_bg_sp.visible = (self.open? && self.visible)

  end

  def openness=(arg)

    self.michael_sp_openness_asgn(arg)
    self.michael_bg_sp.visible = (self.open? && self.visible)

  end

  def x=(arg)

    self.michael_sp_x_asgn(arg)
    self.michael_bg_sp.x = arg

  end

  def y=(arg)

    self.michael_sp_y_asgn(arg)
    self.michael_bg_sp.y = arg

  end

  def width=(arg)

    self.michael_sp_width_asgn(arg)
    self.michael_bg_sp.src_rect.width = arg

  end

  def height=(arg)

    self.michael_sp_height_asgn(arg)
    self.michael_bg_sp.src_rect.height = arg

  end

  if Disable_Flicker_Test

    def width

      self.michael_bg_sp.src_rect.width = self.michael_sp_width
      self.michael_sp_width

    end

    def height

      self.michael_bg_sp.src_rect.height = self.michael_sp_height
      self.michael_sp_height

    end


  end

end

#==============================================================================
# Sprite
#==============================================================================
class Sprite

  def michael_sp_updt(wndw, i)

    $game_switches[Wndw_Cgr::SSP + i[0]] ? michael_bg_on(wndw,i) : michael_bg_off(wndw, i)

  end

  def michael_bg_on(window, i)

    michael_set_self_vp(window)
    michael_save_wndw_opa(window) unless window.did_I_get_changed?
    michael_clear_wndw_opa(window)
    unless i[1] == 'THIS_IS_A_BLANK_PICTURE_YES_USER_WANTS_A_BLANK_WINDOW_ONLY'
      michael_set_self_ppts(window, i) #SET SELF'S PROPERTIES
      michael_modify_self(window, i) unless i[5] == ''
    else
      self.visible = false
    end
  end

  def michael_set_self_vp(window)

    self.viewport = (window.viewport) ? window.viewport : window.michael_bg_vp

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

  def michael_set_self_ppts(window, i)

    self.x = window.x
    self.y = window.y
    unless caller[1][/`.*'/][1..-2] == 'initialize'
      self.src_rect.width = window.width
      self.src_rect.height = window.height
    end
    self.visible = ((window.open?) && (window.visible))

    #======================= Where picture is loaded =======================#

    name = i[1]
    folder = i[2]
    self.bitmap = Cache.cache_extended(folder, name)

    self.z += i[3] unless i[3].nil?
    self.opacity = i[4] if (self.visible) && !(i[4].nil?)

  end

  def michael_modify_self(window, i)

    i[5].match('mtype_show_all__') do

      self.x -= ((self.bitmap.width - window.width) / 2)
      self.src_rect.x = 0 if self.x < 0
      self.y -= ((self.bitmap.height - window.height) / 2)
      self.src_rect.y = 0 if self.y < 0
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

    end

    i[5].match('mtype_move__') do

      self.x += (i[6] - ((self.bitmap.width - window.width) / 2))
      self.src_rect.x = 0 if self.x < 0
      self.y += (i[7] - ((self.bitmap.height - window.height) / 2))
      self.src_rect.y = 0 if self.y < 0
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

    end

    i[5].match('mtype_move_origin__') do

      self.x += i[6]
      self.src_rect.x = 0 if self.x < 0
      self.y += i[7]
      self.src_rect.y = 0 if self.y < 0

    end

    i[5].match('mtype_center__') do

      self.x = (Graphics.width - self.bitmap.width) / 2
      self.src_rect.x = 0 if self.x < 0
      self.y = (Graphics.height - self.bitmap.height) / 2
      self.src_rect.y = 0 if self.y < 0
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

    end

    i[5].match('mtype_move_all__') do

      @sp_offset_x = self.x = i[6]
      @sp_offset_y = self.y = i[7]
      self.src_rect.x = i[8]
      self.src_rect.y = i[9]
      self.src_rect.width = i[10]
      self.src_rect.height = i[11]

    end

    i[5].match('rtype_window_default__') do

      #============================ Resized ============================#

      store_sp_w_float = self.bitmap.width.to_f
      store_sp_h_float = self.bitmap.height.to_f
      store_wndw_w_float = window.width.to_f #+ 12 #paddings
      store_wndw_h_float = window.height.to_f #+ 12

      self.zoom_x = store_wndw_w_float / store_sp_w_float
      self.zoom_y = store_wndw_h_float / store_sp_h_float
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

      #=========================== Relocate ============================#

      #No relocation is necessary for default resizement.

    end

    i[5].match('rtype_window_width__') do

      #============================ Resized ============================#

      store_sp_w_float = self.bitmap.width.to_f
      store_sp_h_float = self.bitmap.height.to_f
      store_wndw_w_float = window.width.to_f

      self.zoom_x = store_wndw_w_float / store_sp_w_float
      self.zoom_y = store_wndw_w_float / store_sp_w_float
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

      #=========================== Relocate ============================#

      self.y += ((store_sp_h_float * store_wndw_w_float / store_sp_w_float -
      store_sp_h_float) / 2)
      self.src_rect.y = 0 if self.y < 0
      self.x = window.x
    end

    i[5].match('rtype_window_height__') do

      #============================ Resized ============================#

      store_sp_w_float = self.bitmap.width.to_f
      store_sp_h_float = self.bitmap.height.to_f
      store_wndw_h_float = window.height.to_f

      self.zoom_x = store_wndw_h_float / store_sp_h_float
      self.zoom_y = store_wndw_h_float / store_sp_h_float
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

      #=========================== Relocate ============================#

      self.x -= ((store_sp_w_float * (store_wndw_h_float / store_sp_h_float) -
      store_sp_w_float) / 2)
      self.src_rect.x = 0 if self.x < 0
      self.y = window.y

    end

    i[5].match('rtype_actual_pixel__') do

      #============================ Resized ============================#

      store_sp_w_float = self.bitmap.width.to_f
      store_sp_h_float = self.bitmap.height.to_f

      self.zoom_x = i[12]
      self.zoom_y = i[13]
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

      #=========================== Relocate ============================#

      self.x +=((i[12] * store_sp_w_float - store_sp_w_float) / 2)
      self.src_rect.x = 0 if self.x < 0
      self.y += ((i[13] * store_sp_h_float - store_sp_h_float) / 2)
      self.src_rect.y = 0 if self.y < 0

    end

    i[5].match('rtype_by_window__') do

      #============================ Resized ============================#

      store_sp_w_float = self.bitmap.width.to_f
      store_sp_h_float = self.bitmap.height.to_f
      store_wndw_w_float = window.width.to_f
      store_wndw_h_float = window.height.to_f

      self.zoom_x = (i[12] * store_wndw_w_float / store_sp_w_float)
      self.zoom_y = (i[13] * store_wndw_h_float / store_sp_h_float)
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

      #=========================== Relocate ============================#

      self.x += ((i[12] * store_sp_w_float /  store_sp_w_float -
      store_sp_w_float / store_sp_w_float) / 2)
      self.src_rect.x = 0 if self.x < 0
      self.y += ((i[13] * store_sp_h_float / store_wndw_h_float -
      store_sp_h_float / store_wndw_h_float) / 2)
      self.src_rect.y = 0 if self.y < 0

    end

    i[5].match('rtype_by_integer__') do

      #============================ Resized ============================#

      store_sp_w_float = self.bitmap.width.to_f
      store_sp_h_float = self.bitmap.height.to_f

      self.zoom_x = i[12] / store_sp_w_float
      self.zoom_y = i[13] / store_sp_h_float
      self.src_rect.width = Graphics.width
      self.src_rect.height = Graphics.height

      #=========================== Relocate ============================#

      self.x += ((i[12] / store_sp_w_float - store_sp_w_float) / 2)
      self.src_rect.x = 0 if self.x < 0
      self.y += ((i[13] / store_sp_h_float - store_sp_h_float) / 2)
      self.src_rect.y = 0 if self.y < 0

    end

    i[5].match('ctype__') do; self.color.set(i[14], i[15], i[16], i[17]); end;

  end

  def michael_bg_off(window, i)

    self.visible = false
    window.oh_I_got_changed = false

    if ((window.openness == 255) && window.visible)
      window.back_opacity = @michael_wndw_b_opa unless @michael_wndw_b_opa.nil?
      window.opacity = @michael_wndw_opa unless @michael_wndw_opa.nil?
    end

  end

end

#==============================================================================
# Rect
#==============================================================================
class Rect
  attr_accessor :michael_nickname_the_cursor_rect
  alias michael_Rect_set_special set

  def set(*args)

    michael_Rect_set_special(*args)

    if self.michael_nickname_the_cursor_rect == 'cursor_rect'

      #gonna add stuff here for select & unselected choice

      #self.clear

    end
  end

end

#==============================================================================
# Scene_Base
#==============================================================================

class Scene_Base

  alias michael_Scene_Base_main main

  def main
    $michael_cursor_rect_bg_sp = Sprite.new     #I'll remove the global once
    $michael_cursor_rect_bg_vp = Viewport.new   #that I found a better solution
    $michael_cursor_rect_bg_sp.viewport = $michael_cursor_rect_bg_vp
    #$michael_cursor_rect_bg_vp.z = 500
    #$michael_cursor_rect_bg_sp.bitmap = Cache.cache_extended("Graphics\\Windows\\Window_Message", 'color')
    #$michael_cursor_rect_bg_sp.src_rect.set(0,0,Graphics.width, Graphics.height)
    #$michael_cursor_rect_bg_sp.zoom_x = 2

    michael_Scene_Base_main
    $michael_cursor_rect_bg_vp.dispose
    $michael_cursor_rect_bg_sp.dispose
  end

end

#==============================================================================
# Game_Message
#==============================================================================
class Game_Message

  attr_accessor :michael_wndw_bg_ary
  attr_accessor :michael_wndw_bg_psuedo
  alias michael_ini initialize

  def initialize

    michael_ini
    @michael_wndw_bg_ary = Wndw_Cgr::Michael_Wndw_Bg_Ary
    @michael_wndw_bg_psuedo = Wndw_Cgr::Wndw_Psuedo_Names

  end

end
#==============================================================================
# DataManager
#==============================================================================
module DataManager

  class << self

    alias michael_dt_mngr_init init
    alias michael_DataManager_create_game_objects create_game_objects

  end

  def self.init

    michael_dt_mngr_init
    create_Wndw_Cgr_directory

  end

  def self.create_Wndw_Cgr_directory

    $game_message.michael_wndw_bg_ary.each_value {
      |value| Dir.mkdir(value[2]) if !File.exists?(value[2])
    }

  end

  def self.create_game_objects

    michael_DataManager_create_game_objects

    #======================== Default setting = false ========================#

    (Wndw_Cgr::Auto) ?
    $game_switches[Wndw_Cgr::SSP...Wndw_Cgr::SSP +
    $game_message.michael_wndw_bg_ary.size] = false :
    $game_switches[Wndw_Cgr::SSP...Wndw_Cgr::SSP + Wndw_Cgr::NOE] = false

  end

end
#===============================================================================
# Game Interpreter
#===============================================================================
class Game_Interpreter

  if Wndw_Cgr::Auto

    def window_blank(class_type)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_switches[Wndw_Cgr::SSP +
      $game_message.michael_wndw_bg_ary[name][0]] = true
      $game_message.michael_wndw_bg_ary[name][1] = 'THIS_IS_A_BLANK_PICTURE_YES_USER_WANTS_A_BLANK_WINDOW_ONLY'
    end

    def window_off(class_type)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_switches[Wndw_Cgr::SSP +
      $game_message.michael_wndw_bg_ary[name][0]] = false
      window_default(name)

    end

    def window_on(class_type, file_name, type_movement = '', type_resize = '')

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_switches[Wndw_Cgr::SSP +
      $game_message.michael_wndw_bg_ary[name][0]] = true
      $game_message.michael_wndw_bg_ary[name][1] = file_name

      if type_movement.match(/(show_all|center)/)
        $game_message.michael_wndw_bg_ary[name][5].slice!(/mtype+\w+?(__)/)
        $game_message.michael_wndw_bg_ary[name][5] << 'mtype_' << type_movement << '__'
      else
        $game_message.michael_wndw_bg_ary[name][5].slice!(/rtype+\w+?(__)/)
        $game_message.michael_wndw_bg_ary[name][5] << 'rtype_window_default__'
      end

    end

    def window_depth(class_type, depth)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][3] = depth

    end

    def window_opacity(class_type, opacity)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][4] = opacity

    end

    def window_default(class_type)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][3] = nil
      $game_message.michael_wndw_bg_ary[name][4] = nil
      $game_message.michael_wndw_bg_ary[name][5] = ''

    end

    def window_show_all(class_type)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/mtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'mtype_show_all__'

    end

    def window_show_all_move(class_type, x, y)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/mtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'mtype_move__'
      $game_message.michael_wndw_bg_ary[name][6] = x
      $game_message.michael_wndw_bg_ary[name][7] = y

    end

    def window_move_origin(class_type,x,y)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/mtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'mtype_move_origin__'
      $game_message.michael_wndw_bg_ary[name][6] = x
      $game_message.michael_wndw_bg_ary[name][7] = y

    end

    def window_center(class_type)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/mtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'mtype_center__'

    end

    def window_move_all(class_type, x, y, rect_x, rect_y, rect_width, rect_height)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/mtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'mtype_move_all__'
      $game_message.michael_wndw_bg_ary[name][6] = x
      $game_message.michael_wndw_bg_ary[name][7] = y
      $game_message.michael_wndw_bg_ary[name][8] = rect_x
      $game_message.michael_wndw_bg_ary[name][9] = rect_y
      $game_message.michael_wndw_bg_ary[name][10] = rect_width
      $game_message.michael_wndw_bg_ary[name][11] = rect_height

    end

    def window_nickname(class_type, name)

      $game_message.michael_wndw_bg_psuedo[name] = class_type

    end

    #Index :D
    #mtype = movement type
    #r = resize
    #rtype = resize type
    #ctype = color type

    def window_r_default(class_type)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/rtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'rtype_window_default__'

    end

    def window_r_fit_w(class_type)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/rtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'rtype_window_width__'

    end

    def window_r_fit_h(class_type)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/rtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'rtype_window_height__'

    end

    def window_r_pixel(class_type, _zoom_x, _zoom_y)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/rtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'rtype_actual_pixel__'
      $game_message.michael_wndw_bg_ary[name][12] = _zoom_x
      $game_message.michael_wndw_bg_ary[name][13] = _zoom_y

    end

    def window_r(class_type, _zoom_x, zoom_y)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/rtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'rtype_by_window__'
      $game_message.michael_wndw_bg_ary[name][12] = _zoom_x
      $game_message.michael_wndw_bg_ary[name][13] = _zoom_y

    end

    def window_r_i(class_type, streched_width, streched_height)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/rtype+\w+?(__)/)
      $game_message.michael_wndw_bg_ary[name][5] << 'rtype_by_integer__'
      $game_message.michael_wndw_bg_ary[name][12] = streched_width
      $game_message.michael_wndw_bg_ary[name][13] = streched_height

    end

    def window_color(class_type, red, green, blue, alpha)

      name = ($game_message.michael_wndw_bg_psuedo.has_key?(class_type)) ?
      $game_message.michael_wndw_bg_psuedo[class_type] : class_type

      $game_message.michael_wndw_bg_ary[name][5].slice!(/ctype+\w+?(__)/)
      #there's only 1 ctype for now. Maybe more will be added when I got some coloring ideas.
      #I'm open for suggestions & advices. :D
      $game_message.michael_wndw_bg_ary[name][5] << 'ctype__'
      $game_message.michael_wndw_bg_ary[name][14] = red
      $game_message.michael_wndw_bg_ary[name][15] = green
      $game_message.michael_wndw_bg_ary[name][16] = blue
      $game_message.michael_wndw_bg_ary[name][17] = alpha

    end

  else

    def window_off(i)

      $game_switches[i + Wndw_Cgr::SSP] = false
      window_default(i)

    end

    def window_on(i, name, type_movement = '')

      $game_switches[i + Wndw_Cgr::SSP] = true
      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[1] = name if value[0] == i
      }

      if type_movement == /(show_all|center)/

        $game_message.michael_wndw_bg_ary.each_value { |value|

          if value[0] == i

            value[5].slice!(/mtype+\w+?(__)/)
            value[5] << 'mtype_' << type_movement << '__'

          end
        }
      end

    end

    def window_depth(i, depth)

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[3] = depth if value[0] == i
      }

    end

    def window_opacity(i, opacity)

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[4] = opacity if value[0] == i
      }

    end

    def window_default(i)

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[3] = nil if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[4] = nil if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[5] = '' if value[0] == i
      }

    end

    def window_show_all(i)

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[5] << 'mtype_show_all__' if value[0] == i
      }

    end

    def window_show_all_move(i, x, y)

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[5] << 'mtype_move__' if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[6] = x if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[7] = y if value[0] == i
      }

    end

    def window_move_origin(i,x,y)

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[5] << 'mtype_move_origin__' if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[6] = x if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[7] = y if value[0] == i
      }

    end

    def window_center(i)

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[5] << 'mtype_center__' if value[0] == i
      }

    end

    def window_move_all(i, x, y, rect_x, rect_y, rect_width, rect_height)

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[5] << 'mtype_move_all__'if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[6] = x if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[7] = y if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[8] = rect_x if value[0] == i
      }
      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[9] = rect_y if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[10] = rect_width if value[0] == i
      }

      $game_message.michael_wndw_bg_ary.each_value {
        |value| value[11] = rect_height if value[0] == i
      }

    end

  end

end
