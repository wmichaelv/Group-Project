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
