#~ Slide Effect (VX-Ace) v1.3 by Jester and OriginalWij
#~ special thanks:
#~  diamondandplatinum3 for being an awesome guy. CHECK OUT HIS SCRIPTING VIDEOS!
#~ helpful feedback:
#~  KilloZapit, Tsukihime, estriole, Chigoo and The Guardian

#~ Version History:
#~ 18.FEB.2013 -> 1.0  -> Initial Release
#~ 09.MAR.2013 -> 1.1  -> Compatibility Improvement and Fixes
#~ 12.MAR.2013 -> 1.2  -> Added Compatibility-options to the Customization section
#~ 14.MAR.2013 -> 1.3  -> Picture and Balloon fix! And more supported Scripts

#~ Features:
#~ Slide-Effect when transfering, just like in the topdown Zelda games.
#~ It is originally designed as addition to my Script: Map Edge Transfer.

#~ This Script is semi-Plug'n'Play and has optional Compatibility fixes.
#~ Take a look at the Customization section.

#~ Bugs:
#~ (no known issues)

#~ Conflicts:
#~ Victor Sant's Light Effects <- Seems nearly impossible to fix =<
#~ I am fine with Compatibility fix requests if you say "PLEEAASEEEE!!!"

#~ Feel free to report any Bugs and Conflicts that are not listed above.
#~ I am available for feedback at rmrk.net and rpgmakervxace.net.
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
$jimported ||= {} #<- DON'T TOUCH ME!!!
$jimported[:jms_sef] = 1.3 #<- DON'T TOUCH ME!!!
module JMSC # Jester Mini-Script Customization
  module SEF # Slide EFfect
#~~~~~~~~~~~~~~~~~~~~~~~~~Customization~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - #
# Slide Effect Options:
  # The speed of the Slide Effect (default: 12):
    Slide_Speed = 12

  # In-game Switch to temporarly disable the Slide Effect:
    Disable_Sliding_Switch = 22

  # Set this to false, if you DON'T want a Slide Effect for normal Transfer
  # (only relevant when using "Map Edge Transfer".)
  # Set to true, if you are confused right now:
    Evented_Sliding = true
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - #

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - #
# Compatibility Options:
  # Set to true, if you use the specific Script:
    SES_Time_Clock = false #SES Dynamic Time "Clock Extension"
    XAS_HUD = false #XAS HUD
    XS_Variable_HUD = false #XS Variable HUD
    XS_Alignment_HUD = false # XS Alignment HUD
    MA_HoverAlert = false #Modern Algebra's Hover Alert. (Overwrites Sprite_HoverAlert update!)
    Pearl_Life_Bars = false #falcao's Pearl v2 "Life Bar"
    Pearl_Skillbar = false #falcao's Pearl v2 "Skillbar"
    Michael_Compatible = true #add-on
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - #

# END OF CUSTOMIZATION!
#~~~~~~~~~~~~~~~~~~~~~~~Main Script~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
# Don't edit anything below, unless you know what you are doing:
  end #module SEF
end #module JMSC


#==============================================================================
# ** Game_Player
#==============================================================================
class Game_Player < Game_Character
  #--------------------------------------------------------------------------
  # * Public Instance Variables (existing variables)
  #--------------------------------------------------------------------------
  attr_accessor :vehicle_type
end

#==============================================================================
# ** Game_Temp
#==============================================================================
class Game_Temp

  #--------------------------------------------------------------------------
  # * Public Instance Variables (new variables)
  #--------------------------------------------------------------------------
  attr_accessor :jms_met_sliding
  attr_accessor :jms_met_slidex
  attr_accessor :jms_met_slidey

  #--------------------------------------------------------------------------
  # * [Alias] initialize
  # *   Initializing the new Variables
  #--------------------------------------------------------------------------
  alias jms_MapEdgeTransfer_GameTemp_init initialize
  def initialize
    jms_MapEdgeTransfer_GameTemp_init
    @jms_met_sliding = false
    @jms_met_slidex = 0
    @jms_met_slidey = 0
  end
end #Game_Temp

#==============================================================================
# ** Sprite_Character
#==============================================================================
class Sprite_Character < Sprite_Base

  #--------------------------------------------------------------------------
  # * [Alias] update
  # *   Redifining the position of the player while sliding the bitmaps
  #--------------------------------------------------------------------------
  alias jms_MapEdgeTransfer_SpriteCharacter_update update
  def update
    jms_MapEdgeTransfer_SpriteCharacter_update
    if $game_temp.jms_met_sliding
      self.x = @character.screen_x + $game_temp.jms_met_slidex
      self.y = @character.screen_y + $game_temp.jms_met_slidey
    end
  end

  #--------------------------------------------------------------------------
  # * [Alias] start_balloon
  # *   Prevent Balloon animations from starting during the Slide-Effect
  #--------------------------------------------------------------------------
  alias jms_MapEdgeTransfer_SpriteCharacter_startballoon start_balloon
  def start_balloon
    return if $game_temp.jms_met_sliding
    jms_MapEdgeTransfer_SpriteCharacter_startballoon
  end
end #Sprite_Character

#==============================================================================
# ** Spriteset_Map
#==============================================================================

class Spriteset_Map

  #--------------------------------------------------------------------------
  # * Public Instance Variables (existing variables)
  #--------------------------------------------------------------------------
  attr_accessor :tilemap

end #Spriteset_Map

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
# Method-chain: Slide Effect

# Relevant Methods:
# jms_met_slideprocessing <- Perform a Slide Transfer into the player direction
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
#==============================================================================
# ** Scene_Map
#==============================================================================

class Scene_Map < Scene_Base
  #--------------------------------------------------------------------------
  # * [Alias] update_transfer_player
  # *   Redirecting, if Slide Effect is possible
  #--------------------------------------------------------------------------
  alias jms_MapEdgeTransfer_SceneMap_updatetrpl update_transfer_player
  def update_transfer_player
    $game_temp.jms_met_sliding = true if $game_player.transfer? && JMSC::SEF::Evented_Sliding && !$game_switches[JMSC::SEF::Disable_Sliding_Switch]
    jms_MapEdgeTransfer_SceneMap_updatetrpl if !$game_temp.jms_met_sliding && $game_player.transfer?
    jms_met_slideprocessing if $game_player.transfer? && $game_temp.jms_met_sliding
  end

  #--------------------------------------------------------------------------
  # * [New Method] jms_met_slideprocessing
  # *   Setting up the Slide Effect Processing
  #--------------------------------------------------------------------------
  def jms_met_slideprocessing
    trans_slide = true
    if $jimported[:jms_met]
      trans_slide = false unless $game_player.jms_met_overedge? == 0
    end
    $game_player.transparent = true if $game_player.vehicle_type == :walk && trans_slide
    @spriteset.update
    @spriteset.dispose_pictures
    @slidemap = Sprite.new
    @slidemap.bitmap = Graphics.snap_to_bitmap
    @slidemap.z = 1
    @spriteset.create_pictures
    jms_met_pretransfer #pre-transfer
    $game_temp.fade_type = 666
    perform_transfer
    $game_map.autoplay
    $game_map.update
    @spriteset.create_characters
    @spriteset = Spriteset_Map.new
    jms_met_preslide #pre-slide
    $game_player.transparent = false if $game_player.vehicle_type == :walk
    jms_met_performslide($game_player.direction)
    @slidemap.dispose
    @spriteset.update
    Input.update
    $game_temp.jms_met_slidex = 0
    $game_temp.jms_met_slidey = 0
    $game_temp.jms_met_sliding = false
  end

  #--------------------------------------------------------------------------
  # * [New Method] jms_met_performslide(d)
  # *   Executing the Slide Effect into cardinal direction "d"
  # *   Credits: OriginalWiJ
  #--------------------------------------------------------------------------
  def jms_met_performslide(d)
    w = Graphics.width
    h = Graphics.height
    speed = JMSC::SEF::Slide_Speed
    case d
      when 2
        @spriteset.tilemap.oy += h + ($game_map.height * 32 - h) * 2
        $game_temp.jms_met_slidex = 0
        $game_temp.jms_met_slidey = h
        for i in 0...h / speed
          @slidemap.oy += speed
          @spriteset.tilemap.oy += speed
          $game_temp.jms_met_slidey -= speed
          @spriteset.update_characters
          Graphics.update
      end
      when 4
        @spriteset.tilemap.ox -= w + ($game_map.width * 32 - w) * 2
        $game_temp.jms_met_slidex = -w
        $game_temp.jms_met_slidey = 0
        for i in 0...w / speed
          @slidemap.ox -= speed
          @spriteset.tilemap.ox -= speed
          $game_temp.jms_met_slidex += speed
          @spriteset.update_characters
          Graphics.update
      end
      when 6
        @spriteset.tilemap.ox += w + ($game_map.width * 32 - w) * 2
        $game_temp.jms_met_slidex = w
        $game_temp.jms_met_slidey = 0
        for i in 0...w / speed
          @slidemap.ox += speed
          @spriteset.tilemap.ox += speed
          $game_temp.jms_met_slidex -= speed
          @spriteset.update_characters
          Graphics.update
      end
      when 8
        @spriteset.tilemap.oy -= h + ($game_map.height * 32 - h) * 2
        $game_temp.jms_met_slidex = 0
        $game_temp.jms_met_slidey = -h
        for i in 0...h / speed
          @slidemap.oy -= speed
          @spriteset.tilemap.oy -= speed
          $game_temp.jms_met_slidey += speed
          @spriteset.update_characters
          Graphics.update
      end
    end
  end

  #--------------------------------------------------------------------------
  # * [New Method] jms_met_pretransfer
  # *   Everything that happens directly before transfering the player.
  #--------------------------------------------------------------------------
  def jms_met_pretransfer
  end

  #--------------------------------------------------------------------------
  # * [New Method] jms_met_preslide
  # *   Everything that happens directly before the Slide Effect.
  #--------------------------------------------------------------------------
  def jms_met_preslide
  end
end #Scene_Map
#End of Method-Chain: Slide Effect

#Compatibility fix: window refresh
if JMSC::SEF::SES_Time_Clock || JMSC::SEF::XS_Variable_HUD || JMSC::SEF::XS_Alignment_HUD
  class Scene_Map < Scene_Base
    alias jms_met_windowcomp_scenemap_slideprocessing jms_met_slideprocessing
    def jms_met_slideprocessing
      dispose_all_windows
      create_all_windows
      jms_met_windowcomp_scenemap_slideprocessing
    end
  end
end #window refresh

#Compatibility fix: SES Time Clock
if JMSC::SEF::SES_Time_Clock
  class Game_Map
    alias jms_met_sestccomp_gamemap_noclock no_clock?
    def no_clock?(map = @map)
      return true if $game_temp.jms_met_sliding
      jms_met_sestccomp_gamemap_noclock(map = @map)
    end
  end
  class Scene_Map < Scene_Base
    alias jms_met_sestccomp_scenemap_jmspretransfer jms_met_pretransfer
    def jms_met_pretransfer
      create_clock_windows
      jms_met_sestccomp_scenemap_jmspretransfer
    end
  end
end #SES Time Clock

#Compatibility fix: XAS HUD
if JMSC::SEF::XAS_HUD
  class Spriteset_Map
    alias jms_met_xashudcomp_spritemap_hud_visible? hud_visible?
    def hud_visible?
      return false if $game_temp.jms_met_sliding
      jms_met_xashudcomp_spritemap_hud_visible?
    end
  end
  class Scene_Map
    alias jms_met_xashudcomp_scenemap_slideprocessing jms_met_slideprocessing
    def jms_met_slideprocessing
      @spriteset.update_xas_spriteset_map
      jms_met_xashudcomp_scenemap_slideprocessing
    end
  end
end #XAS HUD

#Compatibility fix: XS Variable HUD
if JMSC::SEF::XS_Variable_HUD
  class Scene_Map < Scene_Base
    alias jms_met_xsvarcomp_scenemap_preslide jms_met_preslide
    def jms_met_preslide
      jms_met_xsvarcomp_scenemap_preslide
      create_var_hud_window
    end
  end
end #XS Variable HUD

#Compatibility fix: XS Alignment HUD
if JMSC::SEF::XS_Alignment_HUD
  class Scene_Map < Scene_Base
    alias jms_met_xsaligcomp_scenemap_preslide jms_met_preslide
    def jms_met_preslide
      jms_met_xsaligcomp_scenemap_preslide
      create_alignment_hud
    end
  end
end #XS Alignment HUD

#Compatibility fix: MA Hover Alert
if JMSC::SEF::MA_HoverAlert
  class Sprite_HoverAlert < Sprite_Base
    def update
      super
      refresh if @hover_alert != @character.hover_alert # if hover alert changed
      if bitmap
        if @hover_alert.proximity > 0
          x = @character.distance_x_from($game_player.x).abs
          y = @character.distance_y_from($game_player.y).abs
          self.visible = Math.hypot(x, y) <= @hover_alert.proximity
        end
        if self.visible && !$game_temp.jms_met_sliding
          maha_update_se              # Update Sound Effect
          maha_update_frame_animation # Update animation
          maha_update_effect          # Update the effect being played
          # Adust position
          self.x = @char_x + @effect_x
          self.y = @char_y + @effect_y
        end
        if @hover_alert && @hover_alert.time > 0
          if @time == @hover_alert.time
            @character.show_hover_alert("", 0) # End Hover Alert
            refresh
          end
          @time += 1
        end
      end
    end
  end
end #MA Hover Alert

#Compatibility fix: Pearl v2: Skillbar
if JMSC::SEF::Pearl_Skillbar
  class Scene_Map < Scene_Base
    alias jms_met_pearlsbcomp_scenemap_slideprocessing jms_met_slideprocessing
    def jms_met_slideprocessing
      @jms_met_pearl_skillbar = false
      @jms_met_pearl_skillbar = true if $game_system_skillbar_enable != true
      $game_system.skillbar_enable = true if $game_system_skillbar_enable != true
      jms_met_pearlsbcomp_scenemap_slideprocessing
    end
    alias jms_met_pearlsbcomp_scenemap_preslide jms_met_preslide
    def jms_met_preslide
      $game_system.skillbar_enable = nil if @jms_met_pearl_skillbar
      jms_met_pearlsbcomp_scenemap_preslide
    end
  end
end #Pearl Skillbars

#Compatibility fix: Pearl v2: Life Bars
if JMSC::SEF::Pearl_Life_Bars
  class Scene_Map < Scene_Base
    alias jms_met_pearllbcomp_scenemap_slideprocessing jms_met_slideprocessing
    def jms_met_slideprocessing
      @jms_met_pearl_bar = false
      @jms_met_pearl_bar = true if $game_system.pearlbars != true
      $game_system.pearlbars = true if $game_system.pearlbars != true
      jms_met_pearllbcomp_scenemap_slideprocessing
    end
    alias jms_met_pearllbcomp_scenemap_preslide jms_met_preslide
    def jms_met_preslide
      $game_system.pearlbars = nil if @jms_met_pearl_bar
      jms_met_pearllbcomp_scenemap_preslide
    end
  end
end #Pearl Lifebars

# END OF SCRIPT

#==============================================================================
# Compability add-on
#==============================================================================

if JMSC::SEF::Michael_Compatible

  class Scene_Map < Scene_Base

    def jms_met_slideprocessing
    trans_slide = true
    if $jimported[:jms_met]
      trans_slide = false unless $game_player.jms_met_overedge? == 0
    end
    #$game_player.transparent = true if $game_player.vehicle_type == :walk && trans_slide
    @spriteset.update
    @spriteset.dispose_pictures
    @slidemap = Sprite.new
    @slidemap.bitmap = Graphics.snap_to_bitmap
    @slidemap.z = 1
    @spriteset.create_pictures
    jms_met_pretransfer #pre-transfer
    $game_temp.fade_type = 666
    perform_transfer
    $game_map.autoplay
    $game_map.update
    @spriteset.create_characters
    @spriteset = Spriteset_Map.new
    @slidemap.visible = false
    @slidemap2 = Sprite.new
    @slidemap2.bitmap = Graphics.snap_to_bitmap
    @slidemap2.z = 1
    @slidemap2.src_rect.x = 0
    @slidemap2.src_rect.y = 0
    @slidemap.visible = true
    jms_met_preslide #pre-slide
    #$game_player.transparent = false if $game_player.vehicle_type == :walk
    jms_met_performslide($game_player.direction)
    @slidemap.dispose
    @slidemap2.dispose
    @spriteset.update
    Input.update
    $game_temp.jms_met_slidex = 0
    $game_temp.jms_met_slidey = 0
    $game_temp.jms_met_sliding = false
  end

    def jms_met_performslide(d)
      w = Graphics.width
      h = Graphics.height
      speed = JMSC::SEF::Slide_Speed
      case d
      when 2
        #@spriteset.tilemap.oy += h + ($game_map.height * 32 - h) * 2
        @slidemap2.y = Graphics.height
        $game_temp.jms_met_slidex = 0
        $game_temp.jms_met_slidey = h
        for i in 0...h / speed
          @slidemap.oy += speed
          @slidemap2.y -= speed
          #@spriteset.tilemap.oy += speed
          $game_temp.jms_met_slidey -= speed
          #@spriteset.update_characters
          Graphics.update
        end
      when 4
        #@spriteset.tilemap.ox -= w + ($game_map.width * 32 - w) * 2
        @slidemap2.x = -Graphics.width
        $game_temp.jms_met_slidex = -w
        $game_temp.jms_met_slidey = 0
        for i in 0...w / speed
          @slidemap.ox -= speed
          @slidemap2.x += speed
          #@spriteset.tilemap.ox -= speed
          $game_temp.jms_met_slidex += speed
          #@spriteset.update_characters
          Graphics.update
        end
      when 6
        #@spriteset.tilemap.ox += w + ($game_map.width * 32 - w) * 2
        @slidemap2.x = Graphics.width
        $game_temp.jms_met_slidex = w
        $game_temp.jms_met_slidey = 0
        for i in 0...w / speed
          @slidemap.ox += speed
          @slidemap2.x -= speed
          #@spriteset.tilemap.ox += speed
          $game_temp.jms_met_slidex -= speed
          #@spriteset.update_characters
          Graphics.update
          end
      when 8
        #@spriteset.tilemap.oy -= h + ($game_map.height * 32 - h) * 2
        @slidemap2.y = -Graphics.height
        $game_temp.jms_met_slidex = 0
        $game_temp.jms_met_slidey = -h
        for i in 0...h / speed
          @slidemap.oy -= speed
          @slidemap2.y += speed
          #@spriteset.tilemap.oy -= speed
          $game_temp.jms_met_slidey += speed
          #@spriteset.update_characters
          Graphics.update
        end
      end
    end
  end


end

