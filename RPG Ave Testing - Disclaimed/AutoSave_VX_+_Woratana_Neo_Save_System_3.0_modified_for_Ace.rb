=begin
                      AutoSave VX + Woratana Neo Save System 3.0

Author: BulleXt(bulletxt@gmail.com)
Version: 0.1
Date: 06/07/2009

Description:
This script by default will automatically save when you do a map transfer,
after winning a battle and after exiting menu.
You can also manually call an autosave inside an event by simply doing a
call script like this:
Auto_Save.new
The script doesn't disable normal saving system so player can still save on his
slots, he will not be able to overwrite the autosave slot.
The script also lets you set how many saving slots you want.
=end


#This is the autosave slot number
SAVE_NUMBER = 1

#This is an ID switch, if ON it disables the autosave on map transfer
SAVE_ON_MAP_TRANSFER = 92

#This is an ID switch, if ON it disables the autosave after winning a battle
SAVE_AFTER_WINNING_BATTLE = 93

#This is an ID switch, if ON it disables the autosave after closing Menu
SAVE_AFTER_CLOSING_MENU = 94



#===============================================================
# ? [VX] ? Neo Save System III ? ?
#--------------------------------------------------------------
# ? by Woratana [woratana@hotmail.com]
# ? Thaiware RPG Maker Community
# ? Released on: 15/02/2009
# ? Version: 3.0
#--------------------------------------------------------------
# ? Log III:
# - Change back to draw tilemap as screenshot. Don't need any image.
# - For drawing tilemap, the characters won't show on the tilemap.
#--------------------------------------------------------------
# ? Log II:
# - Screenshot DLL is not work with Vista Aero, so I remove it
# and use image for each map instead of screenshot.
# - Actor's level in last version (V.1) is incorrect.
#--------------------------------------------------------------
# ? Features:
# - Unlimited save slots, you can choose max save slot
# - You can use image for scene's background
# - Choose your save file's name, and folder to store save files
# - Choose to show only information you want
# - Editable text for information's title
# - Draw tilemap for map that player is currently in.
# - Remove text you don't want from map's name (e.g. tags for special script)
# - Choose map that you don't want to show its name
# - Include save confirmation window before overwrite old save
#=================================================================

module Wora_NSS
  #==========================================================================
  # * START NEO SAVE SYSTEM - SETUP
  #--------------------------------------------------------------------------
  NSS_WINDOW_OPACITY = 255 # All windows' opacity (Lowest 0 - 255 Highest)
  # You can change this to 0 in case you want to use image for background
  NSS_IMAGE_BG = '' # Background image file name, it must be in folder Picture.
  # use '' for no background
  NSS_IMAGE_BG_OPACITY = 255 # Opacity for background image

  MAX_SAVE_SLOT = 10 # Max save slots no.
  SLOT_NAME = 'SLOT {id}'
  # Name of the slot (show in save slots list), use {id} for slot ID
  SAVE_FILE_NAME = 'Saveslot{id}.rvdata'
  # Save file name, you can also change its file type from .rvdata to other
  # use {id} for save slot ID
  SAVE_PATH = '' # Path to store save file, e.g. 'Save/' or '' (for game folder)

  SAVED_SLOT_ICON = 133 # Icon Index for saved slot
  EMPTY_SLOT_ICON = 141 # Icon Index for empty slot

  EMPTY_SLOT_TEXT = '-NO DATA-' # Text to show for empty slot's data

  DRAW_GOLD = true # Draw Gold
  DRAW_PLAYTIME = true # Draw Playtime
  DRAW_LOCATION = true # Draw location
  DRAW_FACE = true # Draw Actor's face
  DRAW_LEVEL = false # Draw Actor's level
  DRAW_NAME = true # Draw Actor's name

  PLAYTIME_TEXT = 'Play Time: '
  GOLD_TEXT = 'Money: '
  LOCATION_TEXT = 'Location: '
  LV_TEXT = 'Lv '

  MAP_NAME_TEXT_SUB = %w{}
  # Text that you want to remove from map name,
  # e.g. %w{[LN] [DA]} will remove text '[LN]' and '[DA]' from map name
  MAP_NO_NAME_LIST = [] # ID of Map that will not show map name, e.g. [1,2,3]
  MAP_NO_NAME_NAME = '??????????' # What you will use to call map in no name list

  MAP_BORDER = Color.new(0,0,0,200) # Map image border color (R,G,B,Opacity)
  FACE_BORDER = Color.new(0,0,0,200) # Face border color

  ## SAVE CONFIRMATION WINDOW ##
  SFC_Text_Confirm = 'Confirm to save' # Text to confirm to save file
  SFC_Text_Cancel = 'Cancel' # Text to cancel to save
  SFC_Window_Width = 200 # Width of Confirmation Window
  SFC_Window_X_Offset = 0 # Move Confirmation Window horizontally
  SFC_Window_Y_Offset = 0 # Move Confirmation Window vertically
  #----------------------------------------------------------------------
  # END NEO SAVE SYSTEM - SETUP
  #=========================================================================
end

class Auto_Save < Scene_File
  def initialize
    do_save
  end
end



class Scene_File < Scene_Base
  include Wora_NSS
  attr_reader :window_slotdetail
  #--------------------------------------------------------------------------
  # * Start processing
  #--------------------------------------------------------------------------
  def start
    super
    create_menu_background
    if NSS_IMAGE_BG != ''
      @bg = Sprite.new
      @bg.bitmap = Cache.picture(NSS_IMAGE_BG)
      @bg.opacity = NSS_IMAGE_BG_OPACITY
    end
    @help_window = Window_Help.new
    command = []
    (1..MAX_SAVE_SLOT).each do |i|
      command << SLOT_NAME.clone.gsub!(/\{ID\}/i) { i.to_s }
    end
    @window_slotdetail = Window_NSS_SlotDetail.new
    @window_slotlist = Window_SlotList.new(160, command)
    @window_slotlist.y = @help_window.height
    @window_slotlist.height = Graphics.height - @help_window.height
    @help_window.opacity = NSS_WINDOW_OPACITY
    @window_slotdetail.opacity = @window_slotlist.opacity = NSS_WINDOW_OPACITY

  # Create Folder for Save file
  if SAVE_PATH != ''
    Dir.mkdir(SAVE_PATH) if !FileTest.directory?(SAVE_PATH)
  end
    if @saving
      @index = $game_temp.last_file_index
      @help_window.set_text(Vocab::SaveMessage)
    else
      @index = self.latest_file_index
      @help_window.set_text(Vocab::LoadMessage)
      (1..MAX_SAVE_SLOT).each do |i|
        @window_slotlist.draw_item(i-1, false) if !@window_slotdetail.file_exist?(i)
      end
    end
    @window_slotlist.index = @index
    # Draw Information
    @last_slot_index = @window_slotlist.index
    @window_slotdetail.draw_data(@last_slot_index + 1)
  end
  #--------------------------------------------------------------------------
  # * Termination Processing
  #--------------------------------------------------------------------------
  def terminate
    super
    dispose_menu_background
    unless @bg.nil?
      @bg.bitmap.dispose
      @bg.dispose
    end
    @window_slotlist.dispose
    @window_slotdetail.dispose
    @help_window.dispose
  end
  #--------------------------------------------------------------------------
  # * Frame Update
  #--------------------------------------------------------------------------
  def update
    super
    if !@confirm_window.nil?
      @confirm_window.update
      if Input.trigger?(Input::C)
        if @confirm_window.index == 0
          determine_savefile
          @confirm_window.dispose
          @confirm_window = nil
        else
          Sound.play_cancel
          @confirm_window.dispose
          @confirm_window = nil
        end
      elsif Input.trigger?(Input::B)
      Sound.play_cancel
      @confirm_window.dispose
      @confirm_window = nil
      end
    else
      update_menu_background
      @window_slotlist.update
      if @window_slotlist.index != @last_slot_index
        @last_slot_index = @window_slotlist.index
        @window_slotdetail.draw_data(@last_slot_index + 1)
      end
      @help_window.update
      update_savefile_selection
    end
  end
  #--------------------------------------------------------------------------
  # * Update Save File Selection
  #--------------------------------------------------------------------------
  def update_savefile_selection
    if Input.trigger?(Input::C)
      if @saving and @window_slotdetail.file_exist?(@last_slot_index + 1)
        Sound.play_decision
        text1 = SFC_Text_Confirm
        text2 = SFC_Text_Cancel
        @confirm_window = Window_Command.new(SFC_Window_Width,[text1,text2])
        @confirm_window.x = ((544 - @confirm_window.width) / 2) + SFC_Window_X_Offset
        @confirm_window.y = ((416 - @confirm_window.height) / 2) + SFC_Window_Y_Offset
      else
        determine_savefile
      end
    elsif Input.trigger?(Input::B)
      Sound.play_cancel
      return_scene
    end
  end
  #--------------------------------------------------------------------------
  # * Execute Save
  #--------------------------------------------------------------------------
  def do_save

    #if true, player is saving from inside menu
    if @saving
      file = File.open(make_filename(@last_slot_index), "wb")
    else
      #if here player has done a manual Auto_Save.new call from event
      s = SAVE_PATH + SAVE_FILE_NAME.gsub(/\{ID\}/i) { SAVE_NUMBER.to_s }
      file = File.open( s , "wb")
    end
    write_save_data(file)
    file.close
    $scene = Scene_Map.new if @saving
  end
  #--------------------------------------------------------------------------
  # * Execute Load
  #--------------------------------------------------------------------------
  def do_load
    file = File.open(make_filename(@last_slot_index), "rb")
    read_save_data(file)
    file.close
    $scene = Scene_Map.new
    RPG::BGM.fade(1500)
    Graphics.fadeout(60)
    Graphics.wait(40)
    @last_bgm.play
    @last_bgs.play
  end
  #--------------------------------------------------------------------------
  # * Confirm Save File
  #--------------------------------------------------------------------------
  def determine_savefile

    if @last_slot_index + 1 == SAVE_NUMBER
      saving_not_allowed if @saving
      return  if @saving
    end

    if @saving
      Sound.play_save
      do_save
    else
      if @window_slotdetail.file_exist?(@last_slot_index + 1)
        Sound.play_load
        do_load
      else
        Sound.play_buzzer
        return
      end
    end
    $game_temp.last_file_index = @last_slot_index
  end

  #window warning player can't save on auto save slot
  def saving_not_allowed
    Sound.play_buzzer
    b = Bitmap.new(340,60)
    b.draw_text(0, 20,340, 20, "You can't save on the Auto Save slot.")
    w = Window_Message.new
    w.contents = b
    w.width = 380
    w.height = 100
    w.visible = true
    w.openness = 255
    w.x = 100
    w.y = 180
    w.back_opacity = 255
    w.opacity = 255
    w.update
    Graphics.wait(180)
    b.dispose
    w.dispose
    w = nil
    b = nil
  end



  #--------------------------------------------------------------------------
  # * Create Filename
  #     file_index : save file index (0-3)
  #--------------------------------------------------------------------------
  def make_filename(file_index)
    return SAVE_PATH + SAVE_FILE_NAME.gsub(/\{ID\}/i) { (file_index + 1).to_s }
  end
  #--------------------------------------------------------------------------
  # * Select File With Newest Timestamp
  #--------------------------------------------------------------------------
  def latest_file_index
    latest_index = 0
    latest_time = Time.at(0)
    (1..MAX_SAVE_SLOT).each do |i|
      file_name = make_filename(i - 1)
      next if !@window_slotdetail.file_exist?(i)
      file_time = File.mtime(file_name)
      if file_time > latest_time
        latest_time = file_time
        latest_index = i - 1
      end
    end
    return latest_index
  end
end

class Window_SlotList < Window_Command
  #--------------------------------------------------------------------------
  # * Draw Item
  #--------------------------------------------------------------------------
  def draw_item(index, enabled = true)
    rect = item_rect(index)
    rect.x += 4
    rect.width -= 8
    icon_index = 0
    self.contents.clear_rect(rect)
    if $scene.window_slotdetail.file_exist?(index + 1)
      icon_index = Wora_NSS::SAVED_SLOT_ICON
    else
      icon_index = Wora_NSS::EMPTY_SLOT_ICON
    end
    if !icon_index.nil?
      rect.x -= 4
      draw_icon(icon_index, rect.x, rect.y, enabled) # Draw Icon
      rect.x += 26
      rect.width -= 20
    end
    self.contents.clear_rect(rect)
    self.contents.font.color = normal_color
    self.contents.font.color.alpha = enabled ? 255 : 128
    self.contents.draw_text(rect, @commands[index]) if index + 1 != SAVE_NUMBER
    self.contents.draw_text(rect, "Auto Save") if index + 1 == SAVE_NUMBER
  end

  def cursor_down(wrap = false)
    if @index < @item_max - 1 or wrap
      @index = (@index + 1) % @item_max
    end
  end

  def cursor_up(wrap = false)
    if @index > 0 or wrap
      @index = (@index - 1 + @item_max) % @item_max
    end
  end
end

class Window_NSS_SlotDetail < Window_Base
  include Wora_NSS
  def initialize
    super(160, 56, 384, 360)
    @data = []
    @exist_list = []
    @bitmap_list = {}
    @map_name = []
  end

  def dispose
    dispose_tilemap
    super
  end

  def draw_data(slot_id)
    contents.clear # 352, 328
    dispose_tilemap
    load_save_data(slot_id) if @data[slot_id].nil?
    if @exist_list[slot_id]
      save_data = @data[slot_id]
      # DRAW SCREENSHOT~
      contents.fill_rect(0,30,352,160, MAP_BORDER)
      create_tilemap(save_data['gamemap'].data, save_data['gamemap'].display_x,
    save_data['gamemap'].display_y)
      if DRAW_GOLD
        # DRAW GOLD
        gold_textsize = contents.text_size(save_data['gamepar'].gold).width
        goldt_textsize = contents.text_size(GOLD_TEXT).width
        contents.font.color = system_color
        contents.draw_text(0, 0, goldt_textsize, WLH, GOLD_TEXT)
        contents.draw_text(goldt_textsize + gold_textsize,0,200,WLH, Vocab::gold)
        contents.font.color = normal_color
        contents.draw_text(goldt_textsize, 0, gold_textsize, WLH, save_data['gamepar'].gold)
      end
      if DRAW_PLAYTIME
        # DRAW PLAYTIME
        hour = save_data['total_sec'] / 60 / 60
        min = save_data['total_sec'] / 60 % 60
        sec = save_data['total_sec'] % 60
        time_string = sprintf("%02d:%02d:%02d", hour, min, sec)
        pt_textsize = contents.text_size(PLAYTIME_TEXT).width
        ts_textsize = contents.text_size(time_string).width
        contents.font.color = system_color
        contents.draw_text(contents.width - ts_textsize - pt_textsize, 0,
        pt_textsize, WLH, PLAYTIME_TEXT)
        contents.font.color = normal_color
        contents.draw_text(0, 0, contents.width, WLH, time_string, 2)
      end
      if DRAW_LOCATION
        # DRAW LOCATION
        lc_textsize = contents.text_size(LOCATION_TEXT).width
        mn_textsize = contents.text_size(save_data['map_name']).width
        contents.font.color = system_color
        contents.draw_text(0, 190, contents.width,
        WLH, LOCATION_TEXT)
        contents.font.color = normal_color
        contents.draw_text(lc_textsize, 190, contents.width, WLH,
        save_data['map_name'])
      end
        # DRAW FACE & Level & Name
        save_data['gamepar'].members.each_index do |i|
          actor = save_data['gameactor'][save_data['gamepar'].members[i].id]
          face_x_base = (i*80) + (i*8)
          face_y_base = 216
          lvn_y_plus = 10
          lv_textsize = contents.text_size(actor.level).width
          lvt_textsize = contents.text_size(LV_TEXT).width
        if DRAW_FACE
          # Draw Face
          contents.fill_rect(face_x_base, face_y_base, 84, 84, FACE_BORDER)
          draw_face(actor.face_name, actor.face_index, face_x_base + 2,
          face_y_base + 2, 80)
        end
        if DRAW_LEVEL
          # Draw Level
          contents.font.color = system_color
          contents.draw_text(face_x_base + 2 + 80 - lv_textsize - lvt_textsize,
          face_y_base + 2 + 80 - WLH + lvn_y_plus, lvt_textsize, WLH, LV_TEXT)
          contents.font.color = normal_color
          contents.draw_text(face_x_base + 2 + 80 - lv_textsize,
          face_y_base + 2 + 80 - WLH + lvn_y_plus, lv_textsize, WLH, actor.level)
        end
        if DRAW_NAME
          # Draw Name
          contents.draw_text(face_x_base, face_y_base + 2 + 80 + lvn_y_plus - 6, 84,
          WLH, actor.name, 1)
        end
      end
    else
      contents.draw_text(0,0, contents.width, contents.height - WLH, EMPTY_SLOT_TEXT, 1)
    end
  end

  def load_save_data(slot_id)
    file_name = make_filename(slot_id)
    if file_exist?(slot_id) or FileTest.exist?(file_name)
      @exist_list[slot_id] = true
      @data[slot_id] = {}
      # Start load data
      file = File.open(file_name, "r")
      @data[slot_id]['time'] = file.mtime
      @data[slot_id]['char'] = Marshal.load(file)
      @data[slot_id]['frame'] = Marshal.load(file)
      @data[slot_id]['last_bgm'] = Marshal.load(file)
      @data[slot_id]['last_bgs'] = Marshal.load(file)
      @data[slot_id]['gamesys'] = Marshal.load(file)
      @data[slot_id]['gamemes'] = Marshal.load(file)
      @data[slot_id]['gameswi'] = Marshal.load(file)
      @data[slot_id]['gamevar'] = Marshal.load(file)
      @data[slot_id]['gameselfvar'] = Marshal.load(file)
      @data[slot_id]['gameactor'] = Marshal.load(file)
      @data[slot_id]['gamepar'] = Marshal.load(file)
      @data[slot_id]['gametro'] = Marshal.load(file)
      @data[slot_id]['gamemap'] = Marshal.load(file)
      @data[slot_id]['total_sec'] = @data[slot_id]['frame'] / Graphics.frame_rate
      @data[slot_id]['map_name'] = get_mapname(@data[slot_id]['gamemap'].map_id)
      file.close
    else
      @exist_list[slot_id] = false
      @data[slot_id] = -1
    end
  end

  def make_filename(file_index)
    return SAVE_PATH + SAVE_FILE_NAME.gsub(/\{ID\}/i) { (file_index).to_s }
  end

  def file_exist?(slot_id)
    return @exist_list[slot_id] if !@exist_list[slot_id].nil?
    @exist_list[slot_id] = FileTest.exist?(make_filename(slot_id))
    return @exist_list[slot_id]
  end

  def get_mapname(map_id)
    if @map_data.nil?
      @map_data = load_data("Data/MapInfos.rvdata")
    end
    if @map_name[map_id].nil?
      if MAP_NO_NAME_LIST.include?(map_id)
        @map_name[map_id] = MAP_NO_NAME_NAME
      else
        @map_name[map_id] = @map_data[map_id].name
        MAP_NAME_TEXT_SUB.each_index do |i|
          @map_name[map_id].sub!(MAP_NAME_TEXT_SUB[i], '')
        end
      end
    end
    return @map_name[map_id]
  end

  def create_tilemap(map_data, ox, oy)
    @viewport = Viewport.new(self.x + 2 + 16, self.y + 32 + 16, 348,156)
    @viewport.z = self.z
    @tilemap = Tilemap.new(@viewport)
    @tilemap.bitmaps[0] = Cache.system("TileA1")
    @tilemap.bitmaps[1] = Cache.system("TileA2")
    @tilemap.bitmaps[2] = Cache.system("TileA3")
    @tilemap.bitmaps[3] = Cache.system("TileA4")
    @tilemap.bitmaps[4] = Cache.system("TileA5")
    @tilemap.bitmaps[5] = Cache.system("TileB")
    @tilemap.bitmaps[6] = Cache.system("TileC")
    @tilemap.bitmaps[7] = Cache.system("TileD")
    @tilemap.bitmaps[8] = Cache.system("TileE")
    @tilemap.map_data = map_data
    @tilemap.ox = ox / 8 + 99
    @tilemap.oy = oy / 8 + 90
  end

  def dispose_tilemap
    unless @tilemap.nil?
      @tilemap.dispose
      @tilemap = nil
    end
  end
end

class Scene_Title < Scene_Base
  def check_continue
    file_name = Wora_NSS::SAVE_PATH + Wora_NSS::SAVE_FILE_NAME.gsub(/\{ID\}/i) { '*' }
    @continue_enabled = (Dir.glob(file_name).size > 0)
  end
end

################################################################################
class Scene_Menu < Scene_Base
  #save when exiting menu
  alias auto_save_bulletxt_update_command_selection update_command_selection
  def update_command_selection
    if Input.trigger?(Input::B)
      Auto_Save.new if $game_switches[SAVE_AFTER_CLOSING_MENU] == false
    end
    auto_save_bulletxt_update_command_selection
  end
end

class Scene_Battle < Scene_Base
  #save after winning a battle
  alias auto_save_bulletxt_process_victory process_victory
  def process_victory
    auto_save_bulletxt_process_victory
    Auto_Save.new if $BTEST == false && $game_switches[SAVE_AFTER_WINNING_BATTLE] == false
  end
end



class Scene_Map < Scene_Base
  #save on map transfer
  alias auto_save_bulletxt_update_transfer_player  update_transfer_player
  def update_transfer_player
    return unless $game_player.transfer?
    auto_save_bulletxt_update_transfer_player
    Auto_Save.new if $game_switches[SAVE_ON_MAP_TRANSFER] == false
  end
end

#======================================================================
# END - NEO SAVE SYSTEM by Woratana
#======================================================================
