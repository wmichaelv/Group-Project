#=======================================================================
#
# Michael Customized Map HUD for kakekater
#
#=======================================================================

#=======================================================================
# How to use: Place it anywhere under material
#             Read Until the stop command
#=======================================================================



module Custom_HUD

  #Change folder as your wish as long it's inside the project
  #If you haven't created the folder yet, it will create the 
  #folder for you when you start the project
  Folder = "Graphics\\HUD_Bar"

  @hp_bar_full = "" #HP Bar when HP = full
  @hp_bar_empt = "" #HP Bar when HP = 0

  @mp_bar_full = "" #MP Bar when HP = full
  @mp_bar_empt = "" #MP Bar when HP = 0
  
  def self.getHpBarF; @hp_bar_full; end
  def self.getHpBarE; @hp_bar_empt; end
  def self.getMpBarF; @mp_bar_full; end
  def self.getMpBarE; @mp_bar_empt; end

  #This is how you can change the bar
  #Call Script Call: Custom_HUD.setHpBarF("insert_name_here_do_not_forget_quotation_mark")
  def self.setHpBarF(filename); @hp_bar_full = filename; self.update; end
  def self.setHpBarE(filename); @hp_bar_empt = filename; self.update; end
  def self.setMpBarF(filename); @mp_bar_full = filename; self.update; end
  def self.setMpBarE(filename); @mp_bar_empt = filename; self.update; end

  #Border offset
  @hp_l_b = 10 #Left border
  @hp_r_b = 10 #Right border
  @mp_t_b = 10 #Top border
  @mp_b_b = 10 #Bottom border

  #Corrdination of the bar

  X_hp = 29
  Y_hp = 9
  X_mp = 4
  Y_mp = 9

  #Actor ID

  A_id = 001

  #Visible
  @showMe = true

  #How to switch actor
  #Call Script Call: Custom_HUD::actor_switch(insert_actor_id_here)

  def self.actor_switch(id); @actor = $game_actors[id]; update; end

  #Turn on/off switch
  #Call Script Call: Custom_HUD::switch

  def self.switch

    @showMe = !@showMe
    @hp_f_bg.visible = @showMe
    @hp_e_bg.visible = @showMe
    @mp_f_bg.visible = @showMe
    @mp_e_bg.visible = @showMe

  end

  #Stop reading. You done. :x
  
  def self.init

    @hp_f_bg = Sprite.new
    @hp_e_bg = Sprite.new
    @mp_f_bg = Sprite.new
    @mp_e_bg = Sprite.new

    @custom_viewport = Viewport.new
    @custom_viewport.z = 200

    @hp_f_bg.viewport = @custom_viewport
    @hp_e_bg.viewport = @custom_viewport
    @mp_f_bg.viewport = @custom_viewport
    @mp_e_bg.viewport = @custom_viewport

    @hp_e_bg.z -= 1
    @mp_e_bg.z -= 1

    @hp_f_bg.x = X_hp
    @hp_f_bg.y = Y_hp
    @hp_e_bg.x = X_hp
    @hp_e_bg.y = Y_hp
    @mp_f_bg.x = X_mp
    @mp_f_bg.y = Y_mp
    @mp_e_bg.x = X_mp
    @mp_e_bg.y = Y_mp

    @hp_f_bg.bitmap = Cache.custom_HUD(Folder, $game_message.custom_HUD.getHpBarF)
    @hp_e_bg.bitmap = Cache.custom_HUD(Folder, $game_message.custom_HUD.getHpBarE)
    @mp_f_bg.bitmap = Cache.custom_HUD(Folder, $game_message.custom_HUD.getMpBarF)
    @mp_e_bg.bitmap = Cache.custom_HUD(Folder, $game_message.custom_HUD.getMpBarE)

    @stored_bar = Array.new
    @stored_bar << 
    @hp_bar_full.dup <<
    @hp_bar_empt.dup <<
    @mp_bar_full.dup <<
    @mp_bar_empt.dup
    
    @actor = $game_actors[A_id]
    
    @hp_f_bg.src_rect.width = @hp_f_bg.bitmap.width
    @hp_f_bg.src_rect.height = @hp_f_bg.bitmap.height
    
    @hp_f_bg.x += @hp_l_b
    @hp_f_bg.src_rect.x = @hp_l_b
    
    @hp_e_bg.src_rect.width = @hp_e_bg.bitmap.width
    @hp_e_bg.src_rect.height = @hp_e_bg.bitmap.height
    
    @mp_f_bg.src_rect.width = @mp_f_bg.bitmap.width
    @mp_f_bg.src_rect.height = @mp_f_bg.bitmap.height
    
    @mp_f_bg.y += @mp_t_b
    @mp_f_bg.src_rect.y = @mp_t_b
    
    @mp_e_bg.src_rect.width = @mp_e_bg.bitmap.width
    @mp_e_bg.src_rect.height = @mp_e_bg.bitmap.height

    @fhp = @actor.mhp
    @hp = @actor.hp
    @fmp = @actor.mmp
    @mp = @actor.mp
    
    @hp_f_bg.src_rect.width = (@hp.to_f / @fhp) * (@fhp - @hp_r_b - @hp_l_b)
    @hp_e_bg.src_rect.width = @fhp
    @mp_f_bg.src_rect.height = (@mp.to_f / @fmp) * (@fmp - @mp_b_b - @mp_t_b)
    @mp_e_bg.src_rect.height = @fmp

  end
  
  def self.actor; return @actor.id; end
  
  def self.update

    return unless @showMe
    return if (@actor.hp == @hp && @actor.mhp == @fhp &&
               @actor.mp == @mp && @actor.mmp == @fmp)

    if @stored_bar[0] != $game_message.custom_HUD.getHpBarF

      @stored_bar[0] = $game_message.custom_HUD.getHpBarF
      @hp_f_bg.bitmap = Cache.custom_HUD(Folder, $game_message.custom_HUD.getHpBarF)
    
    end

    if @stored_bar[1] != $game_message.custom_HUD.getHpBarE

      @stored_bar[1] = $game_message.custom_HUD.getHpBarE
      @hp_e_bg.bitmap = Cache.custom_HUD(Folder, $game_message.custom_HUD.getHpBarE)
    
    end

    if @stored_bar[2] != $game_message.custom_HUD.getMpBarF

      @stored_bar[2] = $game_message.custom_HUD.getMpBarF
      @mp_f_bg.bitmap = Cache.custom_HUD(Folder, $game_message.custom_HUD.getMpBarF)
    
    end

    if @stored_bar[3] != $game_message.custom_HUD.getMpBarE

      @stored_bar[3] = $game_message.custom_HUD.getMpBarE
      @mp_e_bg.bitmap = Cache.custom_HUD(Folder, $game_message.custom_HUD.getMpBarE)
    
    end

    @hp = @actor.hp
    @fhp = @actor.mhp
    @mp = @actor.mp
    @fmp = @actor.mmp
    
    @hp_f_bg.src_rect.width = (@hp.to_f / @fhp) * (@fhp - @hp_r_b - @hp_l_b)
    @hp_e_bg.src_rect.width = @fhp
    @mp_f_bg.src_rect.height = (@mp.to_f / @fmp) * (@fmp - @mp_b_b - @mp_t_b)
    @mp_e_bg.src_rect.height = @fmp
    
  end
  
  def self.terminate
    
    @hp_f_bg.dispose
    @hp_e_bg.dispose
    @mp_f_bg.dispose
    @mp_e_bg.dispose
    @custom_viewport.dispose
    
  end

end

class Scene_Map

  alias michael_Scene_Map_start start
  alias micheal_Scene_Map_update update
  alias michael_Scene_Map_pre_terminate pre_terminate
  
  def start; michael_Scene_Map_start; michael_create_custom_HUD; end
  def michael_create_custom_HUD; $game_message.custom_HUD.init; end
  def update; micheal_Scene_Map_update; $game_message.custom_HUD.update; end
  def pre_terminate; michael_Scene_Map_pre_terminate; $game_message.custom_HUD.terminate; end

end

#==============================================================================
# Cache
#==============================================================================

module Cache

  def self.custom_HUD(folder, filename); load_bitmap("#{folder}/", "#{filename}"); end

end

#==============================================================================
# Game_Message
#==============================================================================

class Game_Message

  attr_accessor :custom_HUD

  alias michael_ini initialize

  def initialize; michael_ini; @custom_HUD = Custom_HUD; end

end
#==============================================================================
# DataManager
#==============================================================================

module DataManager

  class << self; alias michael_dt_mngr_init init; end

  def self.init

    michael_dt_mngr_init
    create_Wndw_Cgr_directory

  end

  def self.create_Wndw_Cgr_directory

    Dir.mkdir($game_message.custom_HUD::Folder) if !File.exists?($game_message.custom_HUD::Folder)

  end

end