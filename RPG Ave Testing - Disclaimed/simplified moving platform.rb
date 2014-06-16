#==============================================================================
# ** Victor Engine - Moving Platform
#------------------------------------------------------------------------------
# Author : Victor Sant
#
# Aditional Credit :
#   - MGC (Original Concept)
#
# Version History:
#  v 1.00 - 2012.07.24 > First release
#  v 1.01 - 2012.07.25 > Fixed <cliff region: x> tag
#  v 1.02 - 2012.08.03 > Fixed issue with event passability
#  v 1.03 - 2012.08.18 > Fixed issue with Pixel Movement and Vehicles
#------------------------------------------------------------------------------
#  This script allows to setup a new mechanic for the map environment: moving
# platforms that allows the player to go on them, these platform will carry
# the player over. But different from and evented system, the player is free
# to move while over these platforms. It's also possible to set certain
# tiles to be "void" tiles and the player will fall if step on them.
#------------------------------------------------------------------------------
# Compatibility
#   Requires the script 'Victor Engine - Basic Module' v 1.25 or higher
#   Requires the script 'Victor Engine - Pixel Movement' v 1.04 or higher
#   If used with 'Victor Engine - Terrain States' place this bellow it.
#
# * Overwrite methods 
#   class Game_Player < Game_Character
#     def start_map_event(x, y, triggers, normal)
#
# * Alias methods 
#   class Game_Map
#     def setup(map_id)
#     def refresh_tile_events
#     def update(main = false)
#
#   class Game_CharacterBase
#     def update
#     def bush?
#
#   class Game_Player < Game_Character
#     def update
#     def map_passable?(x, y, d)
#     def clear_transfer_info
#     def check_event_contiontion(*args)
#     def on_damage_floor?
#     def on_state_floor?
#
#   class Game_Event < Game_Character
#     def init_public_members
#     def setup_page_settings
#     def update
#     def over_tile?
#
#   class Game_Interpreter
#     def comment_call
#
#   class Sprite_Character < Sprite_Base
#     def update_position
#
#------------------------------------------------------------------------------
# Instructions:
#  To instal the script, open you script editor and paste this script on
#  a new section bellow the Materials section. This script must also
#  be bellow the script 'Victor Engine - Basic'
#
#------------------------------------------------------------------------------
# Comment calls note tags:
#  Tags to be used in events comment box, works like a script call.
# 
#  <return to safe position>
#   This call will make the player return to the last safe position 
#   (I.E: outside of voids or platform)
# 
#  <clear all platform>
#   Reset position of all platforms
#
#  <clear all fallen platform>
#   Reset position of all fallen platforms
#
#  <clear platform: x>
#   Reset position of the platform id x
#     x : platform event id
#
#  <clear fallen platform: x>
#   Reset position of the fallen platform id x
#     x : platform event id
#
#  <reset all platform>
#   Reset position and turn off all self switches of all platforms
#
#  <reset all fallen platform>
#   Reset position and turn off all self switches of all fallen platforms
#
#  <reset platform: x>
#   Reset position and turn off all self switches of the platform id x
#     x : platform event id
#
#  <reset fallen platform: x>
#   Reset position and turn off all self switches of the fallen platform id x
#     x : platform event id
#
#------------------------------------------------------------------------------
# Maps note tags:
#   Tags to be used on the Maps note box in the database
#
#  <fall terrain: x>
#   Setup the terrain ID for void tiles on the map
#     x : terrain tag id
#
#  <fall event id: x>
#   Setup the ID of the common event that will be triggered after a fall
#     x : common event ID
#
#  <fall anim: x>
#   Animation displayed when the player falls
#     x : animation id
#
#  <fall sound: 'file', volume, pitch>
#   Sound played when the player falls
#     'file' : sound filename
#     volume : sound volume
#     pithc  : sound pitch
#
#  <region height x: y>
#   Setup the region height
#     x : region id
#     y : height (in pixels)
#
#  <fall region terrain x: y>
#   Setup the terrain ID for void tiles on inside the region, this don't make
#   the whole region a fall terrain, just change the fall terrain inside
#   of the region
#     x : region id
#     y : terrain tag id
#
#  <fall region event id x: y>
#   Setup the ID of the common event that will be triggered after a fall inside
#   the region set.
#     x : region id
#     y : common event ID
#
#  <fall region anim x: y>
#   Setup the terrain ID for void tiles on the map
#     x : region id
#     x : animation id
#
#  <fall region sound x: 'file', volume, pitch>
#   Reset position and self switches of all fallen platforms
#     x      : region id
#     'file' : sound filename
#     volume : sound volume
#     pithc  : sound pitch
#
#  <cliff region: x>
#  <cliff region: x, y>
#   "Cliffs" are blocked tiles that, when the player step on them, they will
#   fall until they reach a passable tile or for a set number of tiles.
#     x : region id
#     y : number of tiles to fall, opitional
#
#  <cliff sound x: 'file', volume, pitch>
#   Sound played when the player falls from cliffs
#     x      : region id
#     'file' : sound filename
#     volume : sound volume
#     pithc  : sound pitch
#
#  <cliff event id x: y>
#   Setup the ID of the common event that will be triggered after a fall inside
#   the region set.
#     x : region id
#     y : common event ID
#
#------------------------------------------------------------------------------
# Comment boxes note tags:
#   Tags to be used on events Comment boxes. They're different from the
#   comment call, they're called always the even refresh.
#
#  <platform>
#   Make the event a platform, have effect only on the page where this
#   tag was added
#
#  <void>
#   use this tag to make "void platforms" they can't be stand above
#
#  <follow platform i: +x, +y>    <follow platform i: -x, +y>
#  <follow platform i: -x, -y>    <follow platform i: +x, -y>
#   since sometimes events may go out of syncronism even if they have the
#   same movement, you can use this to make a plaform to copy the position
#   of another event, that way they will be syncronized always.
#   You can change the x/y offset so both events don't stay at the same tile.
#    i : event id
#    x : x offset
#    y : y offset
#  
#------------------------------------------------------------------------------
# Move Route Script Calls:
#   These are commands to be used on the script box located on the
#   event move route settings.
#   
#  fall
#   this command will make the platform fall, a fallen platorfm is intangible
#   so the player cant go over it
#
#  clear
#   this command will "clear" the fall state of the platform withou changing
#   the position or self switches
#
#  reset
#   this command will "clear" the fall state of the platform, turn off
#   all self switches and reset the postion of that platform
#
#------------------------------------------------------------------------------
# Additional instructions:
#
#  No matter what you setup on the event page settings, the following values
#  will be always set as follow:
#   - Platform priority is always bellow player
#   - Platform are always through
#   - Platform event trigger is always player touch
#   - Platform move frequency is always 5 (the max)
#
#  The platform movement can be set with the Move Route options, all move
#  route commands works fine with the platforms. Most event commands
#  works fine with platform, althoug the only valid trigger for them is
#  player touch.
#
#  Events with Priority "Bellow Player" will not be triggered while on
#  platforms.
#
#  When using the cliff region, if the number of fall tiles isn't set, there
#  must be a passable tile bellow the cliff tile (no matter the discance), 
#  or the game will freeze.
#
#  IMPORTANT: This mechanic was developed for single player porpouse only.
#   It WILL NOT WORK WITH THE FOLLOWERS. Disable the followers visibility on
#   maps with platforms. I will not make this system works with followers,
#   simply don't ask anything about it.
#
#  VERY IMPORTANT: when the player falls in a void, the script calls a common
#   event. You can do *anything* on this event (besides moving the player),
#   but there is one important thing you must add to it. 
#   You should either use the comment call tag <return to safe position> OR
#   teleport the player to another map. If you don't do any of these two, the
#   player will be stuck in the void and freeze the game.
#   Feel free to add othe non-player movement comands, such as flashing screen
#   or dealing damage to the player, or whatever you want.
#
#  Also DON'T ASK FOR DEMOS! This subject isn't open for discussion, I will not
#   make demos. PERIOD!
#
#==============================================================================

#==============================================================================
# ** Victor Engine
#------------------------------------------------------------------------------
#   Setting module for the Victor Engine
#==============================================================================

module Victor_Engine
  #--------------------------------------------------------------------------
  # * Setup the Void terrain tag ID
  #   Tiles with this tag will be marked as "void" and will make the
  #   player fall.
  #--------------------------------------------------------------------------
  VE_VOID_TERRAIN = 999
  #--------------------------------------------------------------------------
  # * Fall Common event
  #   This is the common event called when the player falls in a void tile
  #   if the map void common event isn't set.
  #--------------------------------------------------------------------------
  VE_FALL_COMMON_EVENT_ID = 2
  #--------------------------------------------------------------------------
  # * required
  #   This method checks for the existance of the basic module and other
  #   VE scripts required for this script to work, don't edit this
  #--------------------------------------------------------------------------
end

#==============================================================================
# ** Game_Map
#------------------------------------------------------------------------------
#  This class handles maps. It includes scrolling and passage determination
# functions. The instance of this class is referenced by $game_map.
#==============================================================================

class Game_Map
  #--------------------------------------------------------------------------
  # * Public Instance Variables
  #--------------------------------------------------------------------------
  attr_reader   :platform_events
  #--------------------------------------------------------------------------
  # * Alias method: setup
  #--------------------------------------------------------------------------
  alias :setup_ve_moving_platform :setup
  def setup(map_id)  #pass
    setup_ve_moving_platform(map_id)
    setup_fall_ids #pass
  end
  #--------------------------------------------------------------------------
  # * Alias method: refresh_tile_events
  #--------------------------------------------------------------------------
  alias :refresh_tile_events_ve_moving_platform :refresh_tile_events
  def refresh_tile_events  #pass
    refresh_tile_events_ve_moving_platform
    refresh_platform_events #pass
  end
  #--------------------------------------------------------------------------
  # * Alias method: update
  #--------------------------------------------------------------------------
  alias :update_ve_moving_platform :update
  def update(main = false)  #pass
    update_ve_moving_platform(main)
    update_scroll_to_position if scroll_to_position?  #pass
  end
  #--------------------------------------------------------------------------
  # * New method: platforms_xy
  #--------------------------------------------------------------------------
  def platforms_xy(x, y)  #pass
    platform_events.select {|event| event.near_platform?(x, y) }
  end
  #--------------------------------------------------------------------------
  # * New method: refresh_platform_events
  #--------------------------------------------------------------------------
  def refresh_platform_events #pass
    @platform_events = @events.values.select {|event| event.platform? }
  end
  #--------------------------------------------------------------------------
  # * New method: all_terrain_tag
  #--------------------------------------------------------------------------
  def all_terrain_tag(x, y)  #pass
    return [] unless valid?(x, y)
    layered_tiles(x, y).collect do |tile_id|
      next if tileset.flags[tile_id] & 0x10 != 0
      tileset.flags[tile_id] >> 12
    end
  end
  #--------------------------------------------------------------------------
  # * New method: void_terrain?
  #--------------------------------------------------------------------------
  def void_terrain?(x, y)  #pass
    all_terrain_tag(x, y).include?(void_terrain_tag)
  end
  #--------------------------------------------------------------------------
  # * New method: bridge_terrain?
  #--------------------------------------------------------------------------
  def bridge_terrain?(x, y)  #pass
    id   = layered_tiles(x, y)[0]
    tag  = tileset.flags[id] >> 12
    pass = tileset.flags[id] & 0x10 != 0
    !pass && tag != void_terrain_tag
  end
  #--------------------------------------------------------------------------
  # * New method: cliff_terrain?
  #--------------------------------------------------------------------------
  def cliff_terrain?(x, y)  #pass
    @region_cliffs[region_id((x - 0.5).ceil, (y - 0.125).ceil)]
  end
  #--------------------------------------------------------------------------
  # * New method: setup_fall_ids
  #--------------------------------------------------------------------------
  def setup_fall_ids       #pass
    setup_fall_terrain_tag #pass
    setup_fall_event_id		 #pass
    setup_region_heights   #pass
    setup_region_cliffs    #pass
    setup_cliff_event_id   #pass
  end
  #--------------------------------------------------------------------------
  # * New method: setup_fall_terrain_tag
  #--------------------------------------------------------------------------
  def setup_fall_terrain_tag #pass
    @void_terrains = {}
    regexp1 = /<FALL TERRAIN: (\d+)>/im
    regexp2 = /<FALL REGION TERRAIN (\d+): (\d+)>/im
    @fall_terrain = note =~ regexp1 ? $1.to_i : VE_VOID_TERRAIN
    note.scan(regexp2) { @void_terrains[$1.to_i] = $2.to_i }
  end
  #--------------------------------------------------------------------------
  # * New method: setup_fall_event_id
  #--------------------------------------------------------------------------
  def setup_fall_event_id #pass
    @fall_event_ids = {}
    regexp1 = /<FALL EVENT ID: (\d+)>/im
    regexp2 = /<FALL REGION EVENT ID (\d+): (\d+)>/im
    @fall_event_id = note =~ regexp1 ? $1.to_i : VE_FALL_COMMON_EVENT_ID
    note.scan(regexp2) { @fall_event_ids[$1.to_i] = $2.to_i }
  end
  #--------------------------------------------------------------------------
  # * New method: setup_region_heights
  #--------------------------------------------------------------------------
  def setup_region_heights #pass
    @region_height = {}
    regexp = /<REGION HEIGHT (\d+): (\d+)>/im
    note.scan(regexp) { @region_height[$1.to_i] = $2.to_i }
  end
  #--------------------------------------------------------------------------
  # * New method: setup_region_cliffs
  #--------------------------------------------------------------------------
  def setup_region_cliffs #pass
    @region_cliffs = {}
    regexp = /<CLIFF REGION: (\d+)(?:, *(\d+))?>/im
    note.scan(regexp) { @region_cliffs[$1.to_i] = $2 ? $2.to_i : 0 }
  end
  #--------------------------------------------------------------------------
  # * New method: setup_cliff_event_id
  #--------------------------------------------------------------------------
  def setup_cliff_event_id #pass
    @cliff_event_ids = {}
    regexp = /<CLIFF EVENT ID (\d+): (\d+)>/im
    note.scan(regexp) { @cliff_event_ids[$1.to_i] = $2.to_i }
  end
  #--------------------------------------------------------------------------
  # * New method: void_terrain_tag
  #--------------------------------------------------------------------------
  def void_terrain_tag  #pass
    result ||= @void_terrains[$game_player.region_id]
    result ||= @fall_terrain
    result
  end
  #--------------------------------------------------------------------------
  # * New method: fall_event_id
  #--------------------------------------------------------------------------
  def fall_event_id  #pass
    result ||= @fall_event_ids[$game_player.region_id]
    result ||= @fall_event_id
    result
  end
  #--------------------------------------------------------------------------
  # * New method: region_height
  #--------------------------------------------------------------------------
  def region_height  #pass
    result ||= @region_height[$game_player.region_id]
    result ||= 0
    result
  end
  #--------------------------------------------------------------------------
  # * New method: region_height
  #--------------------------------------------------------------------------
  def region_cliff  #pass
    cliff_terrain?($game_player.x, $game_player.y)
  end
  #--------------------------------------------------------------------------
  # * New method: fall_event_id
  #--------------------------------------------------------------------------
  def cliff_event_id  #pass
    @cliff_event_ids[$game_player.region_id]
  end
  #--------------------------------------------------------------------------
  # * New method: clear_fallen_platforms
  #--------------------------------------------------------------------------
  def clear_fallen_platforms  #pass
    @platform_events.each {|platform| platform.clear if platform.fall? }
  end
  #--------------------------------------------------------------------------
  # * New method: reset_fallen_platforms
  #--------------------------------------------------------------------------
  def reset_fallen_platforms  #pass
    @platform_events.each {|platform| platform.reset if platform.fall? }
  end
  #--------------------------------------------------------------------------
  # * New method: clear_fallen_platforms
  #--------------------------------------------------------------------------
  def clear_all_platforms  #pass
    @platform_events.each {|platform| platform.clear }
  end
  #--------------------------------------------------------------------------
  # * New method: reset_fallen_platforms
  #--------------------------------------------------------------------------
  def reset_all_platforms #pass
    @platform_events.each {|platform| platform.reset }
  end
  #--------------------------------------------------------------------------
  # * New method: fall_sound
  #--------------------------------------------------------------------------
  def fall_sound #pass
    value   = " *,? *(\d+)? *,? *(\d+)?"
    regexp  = "FALL REGION SOUND #{$game_player.region_id}"
    if note =~ /<#{regexp}: #{get_filename}#{value}>/im
      RPG::SE.new($1.to_s, $2 ? $2.to_i : 100, $3 ? $3.to_i : 100).play
    elsif note =~ /<FALL SOUND: #{get_filename}#{value}>/im
      RPG::SE.new($1.to_s, $2 ? $2.to_i : 100, $3 ? $3.to_i : 100).play
    end
  end
  #--------------------------------------------------------------------------
  # * New method: cliff_sound
  #--------------------------------------------------------------------------
  def cliff_sound  #pass
    value   = " *,? *(\d+)? *,? *(\d+)?"
    regexp  = "CLIFF SOUND #{$game_player.region_id}"
    if note =~ /<#{regexp}: #{get_filename}#{value}>/im
      RPG::SE.new($1.to_s, $2 ? $2.to_i : 100, $3 ? $3.to_i : 100).play
    end
  end
  #--------------------------------------------------------------------------
  # * New method: fall_anim
  #--------------------------------------------------------------------------
  def fall_anim #pass
    regexp  = "FALL REGION ANIM #{$game_player.region_id}"
    return $1.to_i if note =~ /<#{regexp}: (\d+)>/im
    return $1.to_i if note =~ /<FALL ANIM: (\d+)>/im
    return 0
  end
  #--------------------------------------------------------------------------
  # * New method: fall_anim
  #--------------------------------------------------------------------------
  def scroll_to_position(x, y)  #pass
    x = [0, [x, width - screen_tile_x].min].max  unless loop_horizontal?
    y = [0, [y, height - screen_tile_y].min].max unless loop_vertical?
    @id_x = @display_x
    @id_y = @display_y
    @fd_x = (x + width) % width
    @fd_y = (y + height) % height
    @scroll_to_position = true
  end
  #--------------------------------------------------------------------------
  # * New method: update_scroll_to_position
  #--------------------------------------------------------------------------
  def update_scroll_to_position #pass
    return if scrolling?
    start_scroll(2, 1, 5) if @id_y < @fd_y && @display_y < @fd_y
    start_scroll(4, 1, 5) if @id_x > @fd_x && @display_x > @fd_x
    start_scroll(6, 1, 5) if @id_x < @fd_x && @display_x < @fd_x
    start_scroll(8, 1, 5) if @id_y > @fd_y && @display_y > @fd_y
    @scroll_to_position = scrolling?
  end
  #--------------------------------------------------------------------------
  # * New method: scroll_to_position?
  #--------------------------------------------------------------------------
  def scroll_to_position?  #pass
    @scroll_to_position
  end
  #--------------------------------------------------------------------------
  # * New method: check_x_with_direction
  #--------------------------------------------------------------------------
  def check_x_with_direction(x, d)
    round_x(x + (d == 6 ? 1 : d == 4 ? -1 : 0))
  end
  #--------------------------------------------------------------------------
  # * New method: check_y_with_direction
  #--------------------------------------------------------------------------
  def check_y_with_direction(y, d)
    round_y(y + (d == 2 ? 1 : d == 8 ? -1 : 0))
  end
end

#==============================================================================
# ** Game_CharacterBase
#------------------------------------------------------------------------------
#  This class deals with characters. Common to all characters, stores basic
# data, such as coordinates and graphics. It's used as a superclass of the
# Game_Character class.
#==============================================================================

class Game_CharacterBase
  #--------------------------------------------------------------------------
  # * Public Instance Variables
  #--------------------------------------------------------------------------
  attr_reader   :safe_x
  attr_reader   :safe_y
  #--------------------------------------------------------------------------
  # * Alias method: update
  #--------------------------------------------------------------------------
  alias :update_ve_moving_platform :update
  def update
    update_platform if player?
    update_ve_moving_platform
    fix_character_position if player? && !on_platform?
  end
  #--------------------------------------------------------------------------
  # * Definição de gramado
  #--------------------------------------------------------------------------
  alias :bush_ve_moving_platform? :bush?
  def bush?
    bush_ve_moving_platform? && !on_platform?
  end
  #--------------------------------------------------------------------------
  # * New method: platform?
  #--------------------------------------------------------------------------
  def platform?
    return false
  end
  #--------------------------------------------------------------------------
  # * New method: void?
  #--------------------------------------------------------------------------
  def void?
    return false
  end
  #--------------------------------------------------------------------------
  # * New method: falling?
  #--------------------------------------------------------------------------
  def falling?
    return false
  end
  #--------------------------------------------------------------------------
  # * New method: fall?
  #--------------------------------------------------------------------------
  def fall?
    return false
  end
  #--------------------------------------------------------------------------
  # * New method: platform
  #--------------------------------------------------------------------------
  def on_platform?
    return false
  end
  #--------------------------------------------------------------------------
  # * New method: platform
  #--------------------------------------------------------------------------
  def platform
    (@platform && @platform.platform?) ? @platform : nil
  end
  #--------------------------------------------------------------------------
  # * New method: position_adjust
  #--------------------------------------------------------------------------
  def position_adjust
    return 0
  end
  #--------------------------------------------------------------------------
  # * New method: void_tile?
  #--------------------------------------------------------------------------
  def void_tile?(x, y) #pass
    return false if player? && vehicle
    4.times.all? do |i|
      d  = 10 - (i + 1) * 2
      x1 = $game_map.round_x_with_direction(x, d)
      y1 = $game_map.round_y_with_direction(y, d)
      is_void_tile?(x1, y1)
    end
  end
  #--------------------------------------------------------------------------
  # * New method: bridge_tile?
  #--------------------------------------------------------------------------
  def bridge_tile?(x, y)
    4.times.any? do |i|
      d  = 10 - (i + 1) * 2
      x1 = $game_map.round_x_with_direction(x, d)
      y1 = $game_map.round_y_with_direction(y, d)
      is_bridge_tile?(x1, y1)
    end
  end
  #--------------------------------------------------------------------------
  # * New method: cliff_tile?
  #--------------------------------------------------------------------------
  def cliff_tile?(x, y)
    return false if cliff_fall? || (player? && vehicle)
    4.times.all? do |i|
      d  = 10 - (i + 1) * 2
      x1 = $game_map.round_x_with_direction(x, d)
      y1 = $game_map.round_y_with_direction(y, d)
      is_cliff_tile?(x1, y1)
    end
  end
  #--------------------------------------------------------------------------
  # * New method: is_void_tile?
  #--------------------------------------------------------------------------
  def is_void_tile?(x, y)
    return true unless $game_map.valid?(x, y)
    $game_map.void_terrain?(x, y)# && $game_map.void_terrain?(x + 0.125, y)
  end
  #--------------------------------------------------------------------------
  # * New method: is_bridge_tile?
  #--------------------------------------------------------------------------
  def is_bridge_tile?(x, y)
    return true unless $game_map.valid?(x, y)
    $game_map.bridge_terrain?(x, y)# && $game_map.bridge_terrain?(x + 0.125, y)
  end
  #--------------------------------------------------------------------------
  # * New method: is_cliff_tile?
  #--------------------------------------------------------------------------
  def is_cliff_tile?(x, y)
    return true unless $game_map.valid?(x, y)
    $game_map.cliff_terrain?(x, y)# && $game_map.cliff_terrain?(x + 0.125, y)
  end
  #--------------------------------------------------------------------------
  # * New method: cliff_fall?
  #--------------------------------------------------------------------------
  def cliff_fall? #pass
    return false
  end
  #--------------------------------------------------------------------------
  # * New method: passable_tiles?
  #--------------------------------------------------------------------------
  def passable_tile?(x, y, d)
    result = true
    result = passable_down?(x, y)  if d == 2
    result = passable_left?(x, y)  if d == 4
    result = passable_right?(x, y) if d == 6
    result = passable_up?(x, y)    if d == 8
    result
  end
  #--------------------------------------------------------------------------
  # * New method: passable_down?
  #--------------------------------------------------------------------------
  def passable_down?(x, y)
    passable_normal?(x.ceil, y.to_i, 2, 4, x.ceil?) &&
    passable_normal?(x.to_i, y.to_i, 2, 6, x.ceil?)
  end
  #--------------------------------------------------------------------------
  # * New method: passable_left?
  #--------------------------------------------------------------------------
  def passable_left?(x, y)
    passable_normal?(x.ceil, y.ceil, 4, 8, y.ceil?) &&
    passable_normal?(x.ceil, y.to_i, 4, 2, y.ceil?)
  end
  #--------------------------------------------------------------------------
  # * New method: passable_right?
  #--------------------------------------------------------------------------
  def passable_right?(x, y)
    passable_normal?(x.to_i, y.ceil, 6, 8, y.ceil?) &&
    passable_normal?(x.to_i, y.to_i, 6, 2, y.ceil?)
  end
  #--------------------------------------------------------------------------
  # * New method: passable_up?
  #--------------------------------------------------------------------------
  def passable_up?(x, y)
    passable_normal?(x.ceil, y.ceil, 8, 4, x.ceil?) && 
    passable_normal?(x.to_i, y.ceil, 8, 6, x.ceil?)
  end
  #--------------------------------------------------------------------------
  # * New method: passable_normal?
  #--------------------------------------------------------------------------
  def passable_normal?(x, y, d, d2, ceil = false)
    x1 = $game_map.round_x(x)
    y1 = $game_map.round_y(y)
    x2 = $game_map.check_x_with_direction(x1, d)
    y2 = $game_map.check_y_with_direction(y1, d)
    x3 = $game_map.round_x_with_direction(x1, d)
    y3 = $game_map.round_y_with_direction(y1, d)
    return false unless $game_map.valid?(x3, y3)
    return true  if @through || debug_through?
    return false unless map_passable?(x2, y2, d2) || !ceil
    return false unless move_passable1?(x1, y1, x2, y2, d)
    return false unless move_passable2?(x1, y1, x2, y2, d)
    return true
  end
  def counter_tile?
    x = $game_map.check_x_with_direction(@x, @direction)
    y = $game_map.check_y_with_direction(@y, @direction)
    $game_map.counter?(x, y)
  end
  #--------------------------------------------------------------------------
  # * New method: move_passable1?
  #--------------------------------------------------------------------------
  def move_passable1?(x1, y1, x2, y2, d)
    map_passable?(x1, y1, d) || map_passable?(x2, y2, d)
  end
  #--------------------------------------------------------------------------
  # * New method: move_passable?
  #--------------------------------------------------------------------------
  def move_passable2?(x1, y1, x2, y2, d)
    map_passable?(x2, y2, reverse_dir(d)) && (map_passable?(x1, y1, d) ||
    locked_tile?(x1, y1))
  end
  def locked_tile?(x, y, d = 0)
    list = [2, 4, 6, 8] - [d]
    list.all? {|d| !map_passable?(x, y, d) }
  end
  #--------------------------------------------------------------------------
  # * New method: over?
  #--------------------------------------------------------------------------
	def over?(x, y)    
		return x <= @real_x + 1 &&
		       x >= @real_x     &&
		       y <= @real_y + 1 &&
		       y >= @real_y
	end
  
end

#==============================================================================
# ** Game_Player
#------------------------------------------------------------------------------
#  This class handles maps. It includes event starting determinants and map
# scrolling functions. The instance of this class is referenced by $game_map.
#==============================================================================

class Game_Player < Game_Character
  #--------------------------------------------------------------------------
  # * Overwrite method: start_map_event
  #--------------------------------------------------------------------------
  def start_map_event(x, y, triggers, normal)
    return if $game_map.interpreter.running?
    $game_map.events_xy(x, y).each do |event|
      next if event.platform?
      event.start if check_event_contiontion(x, y, event, triggers, normal)
    end
    $game_map.platforms_xy(x, y).each do |event|
      event.start if check_platoform_contiondion(x, y, event, triggers, normal)
    end
  end
  #--------------------------------------------------------------------------
  # * Alias method: update
  #--------------------------------------------------------------------------
  alias :update_gp_ve_moving_platform :update
  def update
    safe_position
    return if update_fall
    return if update_cliff
    return if update_blink
    return if blinking?
    update_gp_ve_moving_platform
    start_cliff if cliff? && !falling?
    start_fall  if fall?  && !cliff_fall?
  end
  #--------------------------------------------------------------------------
  # * Alias method: map_passable?
  #--------------------------------------------------------------------------
  alias :map_passable_ve_moving_platform? :map_passable?
  def map_passable?(x, y, d)
  	print("\nx       = #{x}")
  	print("\n@real_x = #{@real_x}")
  	print("\ny       = #{y}")
  	print("\n@real_y = #{@real_y}")
    print("\nvoid_til= #{void_tile?(x, y)}")
  	print("\ncliff_ti= #{cliff_tile?(x, y)}")
  	case Input.dir8
		when 1
			x -= 0.4999
			x = x.to_i
			y += 0.4999
			y = y.to_i
		when 2
			y += 0.4999
			y = y.to_i
		when 3
			x += 0.4999
			x = x.to_i
			y += 0.4999
			y = y.to_i
		when 4
			x -= 0.4999
			x = x.to_i
		when 6
			x += 0.4999
			x = x.to_i
		when 7
			x -= 0.4999
			x = x.to_i
			y -= 0.4999
			y = y.to_i
		when 8
			y -= 0.4999
			y = y.to_i
		when 9
			x += 0.4999
			x = x.to_i
			y -= 0.4999
			y = y.to_i
		else
		end
    result = map_passable_ve_moving_platform?(x.to_i, y.to_i, d)
    result = true if void_tile?(x, y) || cliff_tile?(x, y)
    start_fall if void_tile?(x, y)
    result
  end
  #--------------------------------------------------------------------------
  # * Alias method: clear_transfer_info
  #--------------------------------------------------------------------------
  alias :clear_transfer_info_ve_moving_platform :clear_transfer_info
  def clear_transfer_info
    clear_transfer_info_ve_moving_platform
    @fall_height   = 0
    @cliff_height  = 0
    @region_height = 0
    @fall_blink    = 0
    @opacity       = @fall_opacity if @fall_opacity
    @fall_opacity  = nil
    @blinking      = false
    @falling       = false
    @start_blink   = false
  end
  #--------------------------------------------------------------------------
  # * Alias method: check_event_contiontion
  #--------------------------------------------------------------------------
  def check_event_contiontion(*args)
    return false if args[2].platform?
    passable = passable_tile?(@x, @y, @direction)
    w = 1
    h = 1
    return false unless args[2].trigger_in?(args[3])
    return false unless passable || args[2].over_tile? || counter_tile?
    return false unless args[2].collision?(*args) || !jumping?
    return false unless !args[2].in_front? || front_collision?(x, y, @direction)
    return true
  end
  #--------------------------------------------------------------------------
  # * Alias method: on_damage_floor?
  #--------------------------------------------------------------------------
  alias :on_damage_floor_ve_moving_platform? :on_damage_floor?
  def on_damage_floor?
    on_damage_floor_ve_moving_platform? && !on_platform?
  end
  #--------------------------------------------------------------------------
  # * Alias method: on_state_floor?
  #--------------------------------------------------------------------------
  alias :on_state_floor_ve_moving_platform? :on_state_floor? if $imported[:ve_terrain_states]
  def on_state_floor?
    on_state_floor_ve_moving_platform? && !on_platform?
  end
  #--------------------------------------------------------------------------
  # * New method: update_platform
  #--------------------------------------------------------------------------
  def update_platform
    @platform = set_platform #unless is_on_platform?
    update_platform_move     if is_on_platform? && !falling?
  end
  #--------------------------------------------------------------------------
  # * New method: on_platform?
  #--------------------------------------------------------------------------
  def is_on_platform?
    @on_platform = platform && platform.over?(@real_x, @real_y)
    @on_platform
  end
  #--------------------------------------------------------------------------
  # * New method: passable?
  #--------------------------------------------------------------------------
  def passable?(x, y, d)
    x1 = $game_map.round_x_with_direction(x, d)
    y1 = $game_map.round_y_with_direction(y, d)
    passable = passable_platform?(x1, y1, d)
    passable = super unless passable
    passable
  end
  #--------------------------------------------------------------------------
  # * New method: update_platform_move
  #--------------------------------------------------------------------------
  def update_platform_move
    super
    check_touch_event
  end
  #--------------------------------------------------------------------------
  # * New method: passable_platform?
  #--------------------------------------------------------------------------
  def passable_platform?(x, y, d)
    ( on_platform? && on_platform_collision?(x, y, d))  ||
    (!on_platform? && off_platform_collision?(x, y, d))
  end
  #--------------------------------------------------------------------------
  # * New method: over_next_platform?
  #--------------------------------------------------------------------------
  def over_next_platform?
    on_platform_collision?(@x, @y, @direction)
  end
  #--------------------------------------------------------------------------
  # * New method: on_platform_collision?
  #--------------------------------------------------------------------------
  def on_platform_collision?(x, y, d)
    over_platform?(x, y, d) && !collide_with_non_platform?(x, y, d)
  end
  #--------------------------------------------------------------------------
  # * New method: off_platform_collision?
  #--------------------------------------------------------------------------
  def off_platform_collision?(x, y, d)
    platform_collision?(x, y, d) && !collide_with_non_platform?(x, y, d)
  end
  #--------------------------------------------------------------------------
  # * New method: safe_position
  #--------------------------------------------------------------------------
  def safe_position
    return if !safe_tile? || on_platform? || falling? || blinking?
    @safe_d = @direction
    @safe_c = @final_direction
    @safe_x = @x
    @safe_y = @y
    @region_height = $game_map.region_height unless is_void_tile?(@x, @y)
  end
  #--------------------------------------------------------------------------
  # * New method: safe_tile? 
  #--------------------------------------------------------------------------
  def safe_tile?
    !void_tile?(@x, @y) || bridge_tile?(@x, @y)
  end
  #--------------------------------------------------------------------------
  # * New method: on_platform?
  #--------------------------------------------------------------------------
  def on_platform?
    @on_platform
  end
  #--------------------------------------------------------------------------
  # * New method: falling?
  #--------------------------------------------------------------------------
  def falling?
    @falling
  end
  #--------------------------------------------------------------------------
  # * New method: blinking?
  #--------------------------------------------------------------------------
  def blinking?
    @blinking
  end
  #--------------------------------------------------------------------------
  # * New method: cliff_fall?
  #--------------------------------------------------------------------------
  def cliff_fall? #pass
    @cliff_fall
  end
  #--------------------------------------------------------------------------
  # * New method: fall?
  #--------------------------------------------------------------------------
  def fall?
    fall_tile? && !no_custom_movement? && !over_next_platform?
  end
  #--------------------------------------------------------------------------
  # * New method: cliff?
  #--------------------------------------------------------------------------
  def cliff?
    cliff_fall_tile? && !no_custom_movement? && !over_next_platform?
  end
  #--------------------------------------------------------------------------
  # * New method: fall_tile?
  #--------------------------------------------------------------------------
  def fall_tile?
    void_tile?(@x, @y) && !bridge_tile?(@real_x, @real_y)
  end
  #--------------------------------------------------------------------------
  # * New method: cliff?
  #--------------------------------------------------------------------------
  def cliff_fall_tile?
    cliff_tile?(@x, @y)
  end
  #--------------------------------------------------------------------------
  # * New method: no_custom_movement?
  #--------------------------------------------------------------------------
  def no_custom_movement? #pass
    jumping? || on_platform? || falling? || blinking?
  end
  #--------------------------------------------------------------------------
  # * New method: start_fall
  #--------------------------------------------------------------------------
  def start_fall #pass
    @platform = nil
    @falling  = true
    @fall_opacity = @opacity
  end
  #--------------------------------------------------------------------------
  # * New method: update_fall
  #--------------------------------------------------------------------------
  def update_fall
    return unless falling?
    result = falling?
    @fall_height += 4 + (@fall_height / 20.0)
    fall_effects if @fall_height - @region_height > 0 && !@fall_effect
    @opacity = 240 - (@fall_height - @region_height) * 5
    end_fall if @fall_height - @region_height >= 48
    result
  end
  #--------------------------------------------------------------------------
  # * New method: fall_effects
  #--------------------------------------------------------------------------
  def fall_effects
    $game_map.fall_sound
    @animation_id = $game_map.fall_anim
    @fall_effect  = true
  end
  #--------------------------------------------------------------------------
  # * New method: end_fall
  #--------------------------------------------------------------------------
  def end_fall
    @fall_height   = 0
    @fall_effect   = false
    @falling       = false
    @blinking      = true
    $game_temp.reserve_common_event($game_map.fall_event_id)
  end
  #--------------------------------------------------------------------------
  # * New method: start_blink
  #--------------------------------------------------------------------------
  def start_blink
    @opacity      = @fall_opacity if @fall_opacity && !$game_party.all_dead?
    @fall_opacity = nil
    @falling      = false
    @start_blink  = true
    @fall_blink  = 0
    @jump_peak   = 0
    @jump_count  = 0
    @direction   = @safe_d
    @real_x = @x = @safe_x
    @real_y = @y = @safe_y
    $game_map.scroll_to_position(@x - center_x, @y - center_y)
    @current_direction = @final_direction = @safe_c
    straighten
  end
  #--------------------------------------------------------------------------
  # * New method: update_blink
  #--------------------------------------------------------------------------
  def update_blink
    return unless @start_blink
    result = @start_blink
    @fall_blink += 1
    @transparent = @fall_blink % 10 > 5
    end_blink if @fall_blink >= 60
    result
  end
  #--------------------------------------------------------------------------
  # * New method: end_blink
  #--------------------------------------------------------------------------
  def end_blink
    @transparent = false
    @fall_blink  = 0
    @blinking    = false
    @start_blink = false
  end
  #--------------------------------------------------------------------------
  # * New method: end_blink
  #--------------------------------------------------------------------------
  def start_cliff
    y = @y
    y += $game_map.region_cliff
    @cliff_fall = true
    if $game_map.region_cliff == 0
      begin
        y += 1.0
      end while !cliff_fall_position?(@x, y)
    end
    $game_map.cliff_sound
    @cliff_event  = $game_map.cliff_event_id
    @cliff_height = (y.to_i - @y) * 32
    @cliff_top    = @cliff_height
    @real_y = @y  = y.to_i
  end
  #--------------------------------------------------------------------------
  # * New method: cliff_fall_position?
  #--------------------------------------------------------------------------
  def cliff_fall_position?(x, y)
    return false if locked_move?(x, y)
    return false if cliff_tile?(x, y)
    return false if !passable_down?(x, y - 1)
    return true
  end
  #--------------------------------------------------------------------------
  # * New method: update_cliff
  #--------------------------------------------------------------------------
  def update_cliff
    return unless cliff_fall?
    result = cliff_fall?
    @cliff_height -= 4 + ((@cliff_top - @cliff_height) / 20.0)
    end_cliff if @cliff_height <= 0
    result
  end
  #--------------------------------------------------------------------------
  # * New method: end_fall
  #--------------------------------------------------------------------------
  def end_cliff
    @real_y = @y  = @y.to_i
    @cliff_height = 0
    @cliff_fall   = false
    $game_temp.reserve_common_event(@cliff_event) if @cliff_event
    $game_map.scroll_to_position(@x - center_x, @y - center_y)
  end
  #--------------------------------------------------------------------------
  # * New method: position_adjust
  #--------------------------------------------------------------------------
  def position_adjust
    super - @fall_height + @cliff_height
  end
  #--------------------------------------------------------------------------
  # * New method: platform_list
  #--------------------------------------------------------------------------
  def platform_list
    ([platform] + $game_map.platforms_xy(@real_x, @real_y)).compact
  end
  #--------------------------------------------------------------------------
  # * New method: set_platform
  #--------------------------------------------------------------------------
  def set_platform
    platform_list.select {|platform| platform.over?(@real_x, @real_y) }.first
  end
  #--------------------------------------------------------------------------
  # * New method: over_platform?
  #--------------------------------------------------------------------------
  def over_platform?(x, y, d) #pass
    x1 = $game_map.round_x_with_direction(x, d)
    y1 = $game_map.round_y_with_direction(y, d)
    return false unless $game_map.valid?(x1, y1)
    return true if @through || debug_through?
    platform_list.any? {|platform| platform.over?(x1, y1) }
  end
  #--------------------------------------------------------------------------
  # * New method: platform_collision?
  #--------------------------------------------------------------------------
  def platform_collision?(x, y, d)
    over_platform?(x, y, d)
  end
  #--------------------------------------------------------------------------
  # * New method: update_platform_move
  #--------------------------------------------------------------------------
  def update_platform_move
    return if collide_with_non_platform?(@real_x, @real_y, 0)
    d  = platform.distance_per_frame
    dx = @real_x - platform.real_x
    dy = @real_y - platform.real_y
    px = platform.x
    py = platform.y
    rx = @real_x
    ry = @real_y
    @real_y = [@real_y + d, py + dy].min if py + dy > ry
    @y      = [@y + d, py + dy].min      if py + dy > ry
    @real_x = [@real_x - d, px + dx].max if px + dx < rx
    @x      = [@x - d, px + dx].max      if px + dx < rx
    @real_x = [@real_x + d, px + dx].min if px + dx > rx
    @x      = [@x + d, px + dx].min      if px + dx > rx
    @real_y = [@real_y - d, py + dy].max if py + dy < ry
    @y      = [@y - d, py + dy].max      if py + dy < ry
    fix_character_position unless moved_platform?(dx, dy, px, py, rx, ry)
    check_event_trigger_touch(@x, @y)
  end
  #--------------------------------------------------------------------------
  # * New method: moved_platform
  #--------------------------------------------------------------------------
  def moved_platform?(dx, dy, px, py, rx, ry) #pass
  	py + dy < ry || 
    py + dy < ry ||
    py + dy > ry || 
    py + dy > ry || 
    px + dx < rx || 
    px + dx < rx ||
    px + dx > rx || 
    px + dx > rx
  end
  #--------------------------------------------------------------------------
  # * New method: fix_character_position
  #--------------------------------------------------------------------------
  def fix_character_position #out
    #@x = fix_position(@x)
    #@y = fix_position(@y)
  end
  #--------------------------------------------------------------------------
  # * New method: collide_with_non_platform?
  #--------------------------------------------------------------------------
  def collide_with_non_platform?(x, y, d)
    x1    = $game_map.round_x_with_direction(x, d)
    y1    = $game_map.round_y_with_direction(y, d)
    list  = $game_map.events_xy_nt(x1, y1) - $game_map.platform_events
    value = [x1, y1, 1, 1, event?, @id, @side_collision]
    list.any? do |event|
      event.collision_condition?(*value) unless event == self
    end
  end  
  #--------------------------------------------------------------------------
  # * New method: check_platoform_contiondion
  #--------------------------------------------------------------------------
  def check_platoform_contiondion(x, y, event, triggers, normal)
    return false unless event.over?(x, y) && !fall?
    return false if jumping?
    return false unless event.trigger_in?(triggers)
    return false unless event.over_tile? || counter_tile?
    return false unless !event.in_front? || front_collision?(x, y, @direction)
    return true
  end
  def platform?
    @platform
  end
end

#==============================================================================
# ** Game_Event
#------------------------------------------------------------------------------
#  This class deals with events. It handles functions including event page 
# switching via condition determinants, and running parallel process events.
# It's used within the Game_Map class.
#==============================================================================

class Game_Event < Game_Character
  #--------------------------------------------------------------------------
  # * Alias method: init_public_members
  #--------------------------------------------------------------------------
  alias :init_public_members_ve_moving_platform :init_public_members
  def init_public_members
    init_public_members_ve_moving_platform
    @fall_height = 0
  end
  #--------------------------------------------------------------------------
  # * Alias method: setup_page_settings
  #--------------------------------------------------------------------------
  alias :setup_page_settings_ve_moving_platform :setup_page_settings
  def setup_page_settings
    setup_page_settings_ve_moving_platform
    @move_steps   = note =~ /<MOVE STEPS: (\d+)>/i ? $1.to_i : nil
    @step_trigger = note =~ /<EACH STEP TRIGGER>/i ? true : false
    @in_front     = note =~ /<FRONT COLLISION>/i   ? true : false
    @over_tile    = note =~ /<OVER TILE>/i         ? true : false
    @side_fix     = note =~ /<NO SIDE COLLISION FIX>/i ? false : true
    @is_platform = note =~ /\<PLATFORM>/i ? true : false
    @is_void     = note =~  /\<VOID>/i    ? true : false
    setup_platform_settings if platform?
    setup_platform_follow   if platform?
    @fall_height = 0
  end
  #--------------------------------------------------------------------------
  # * Alias method: update
  #--------------------------------------------------------------------------
  alias :update_ge_ve_moving_platform :update
  def update
    return if update_fall
    setup_platform_settings if platform?
    update_ge_ve_moving_platform
    update_platform_follow  if @follow_event_id
  end
  #--------------------------------------------------------------------------
  # * Alias method: over_tile?
  #--------------------------------------------------------------------------
  def over_tile?
    platform? || @over_tile
  end
  #--------------------------------------------------------------------------
  # * New method: map_passable?
  #--------------------------------------------------------------------------
  def map_passable?(x, y, d)
    result = super
    result = false if void_tile?(x, y) && !bridge_tile?(x, y)
    result = false if cliff_tile?(x, y)
    result
  end
  #--------------------------------------------------------------------------
  # * New method: near?
  #--------------------------------------------------------------------------
  def near_platform?(x, y)
    @real_x > x - 2 && @real_x < x + 2 && @real_y > y - 2 && @real_y < y + 2
  end
  #--------------------------------------------------------------------------
  # * New method: setup_platform_settings
  #--------------------------------------------------------------------------
  def setup_platform_settings
    @through        = true 
    @move_frequency = 5
    @priority_type  = 0
    @trigger        = 1
  end
  #--------------------------------------------------------------------------
  # * New method: setup_platform_follow
  #--------------------------------------------------------------------------
  def setup_platform_follow
    regexp = /<FOLLOW PLATFORM (\d+): ([+-]?\d+), *([+-]?\d+)>/i
    @follow_event_id = note =~ regexp ? $1.to_i : nil
    @follow_offset_x = note =~ regexp ? $2.to_i : nil
    @follow_offset_y = note =~ regexp ? $3.to_i : nil
  end
  #--------------------------------------------------------------------------
  # * New method: update_platform_follow
  #--------------------------------------------------------------------------
  def update_platform_follow
    event = $game_map.events[@follow_event_id]
    return unless event
    @real_x = event.real_x + @follow_offset_x
    @real_y = event.real_y + @follow_offset_y
    @x      = event.x + @follow_offset_x
    @y      = event.y + @follow_offset_y
  end
  #--------------------------------------------------------------------------
  # * New method: over?
  #--------------------------------------------------------------------------
  def over?(x, y)
    print("\ncaller           = ")
    print(caller[1][/`.*'/][1..-2])
    print("\nover?         = #{super && !void?}")
    return super && !void?
  end 
  #--------------------------------------------------------------------------
  # * New method: platform?
  #--------------------------------------------------------------------------
  def platform?
    @is_platform
  end
  #--------------------------------------------------------------------------
  # * New method: void?
  #--------------------------------------------------------------------------
  def void?
    @is_void || fall? || !find_proper_page
  end
  #--------------------------------------------------------------------------
  # * New method: fall?
  #--------------------------------------------------------------------------
  def fall?
    @fall || falling?
  end
  #--------------------------------------------------------------------------
  # * New method: falling?
  #--------------------------------------------------------------------------
  def falling?
    @falling
  end
  #--------------------------------------------------------------------------
  # * New method: clear_fall
  #--------------------------------------------------------------------------
  def clear_fall(reset)
    @opacity = @fall_opacity  if @fall_opacity
    @move_route.repeat = true if @fall_repeat
    reset_platform_switches   if reset
    moveto($game_map.map_events[@id].x, $game_map.map_events[@id].y) if reset
    @fall    = false
    refresh
  end
  #--------------------------------------------------------------------------
  # * New method: reset_platform_switches
  #--------------------------------------------------------------------------
  def reset_platform_switches
    ["A","B","C","D"].each {|i| $game_self_switches[[@map_id, @id, i]] = false }
  end
  #--------------------------------------------------------------------------
  # * New method: position_adjust
  #--------------------------------------------------------------------------
  def position_adjust
    super - @fall_height
  end
  #--------------------------------------------------------------------------
  # * New method: update_fall
  #--------------------------------------------------------------------------
  def update_fall
    return unless falling?
    result = falling?
    @fall_height += 4 + (@fall_height / 20.0)
    @opacity = 240 - @fall_height * 5
    end_fall if @fall_height >= 48
    result
  end
  #--------------------------------------------------------------------------
  # * New method: fall
  #--------------------------------------------------------------------------
  def fall
    @jump_count   = 0
    @fall_repeat  = @move_route.repeat
    @fall         = true
    @falling      = true
    @fall_opacity = @opacity
    @move_route.repeat = false
  end
  #--------------------------------------------------------------------------
  # * New method: end_fall
  #--------------------------------------------------------------------------
  def end_fall
    @fall_height = 0
    @falling     = false
  end
  #--------------------------------------------------------------------------
  # * New method: clear
  #--------------------------------------------------------------------------
  def clear 
    clear_fall(false) 
  end
  #--------------------------------------------------------------------------
  # * New method: clear
  #--------------------------------------------------------------------------
  def reset 
    clear_fall(true) 
  end
  def in_front? 
    @in_front 
  end
end

#==============================================================================
# ** Game_Interpreter
#------------------------------------------------------------------------------
#  An interpreter for executing event commands. This class is used within the
# Game_Map, Game_Troop, and Game_Event classes.
#==============================================================================

class Game_Interpreter
  #--------------------------------------------------------------------------
  # * Alias method: comment_call
  #--------------------------------------------------------------------------
  alias :comment_call_ve_moving_platform :comment_call
  def comment_call
    call_clear_platform
    call_reset_platform
    call_clear_all_platform
    call_reset_all_platform
    call_return_to_safe_position
    comment_call_ve_moving_platform
  end
  #--------------------------------------------------------------------------
  # * New method: call_return_to_safe_position
  #--------------------------------------------------------------------------
  def call_return_to_safe_position
    $game_player.start_blink if note =~ /<RETURN TO SAFE POSITION>/i 
  end
  #--------------------------------------------------------------------------
  # * New method: call_clear_platform
  #--------------------------------------------------------------------------
  def call_clear_platform
    note.scan(/<CLEAR (FALLEN )?PLATFORM: (\d+)>/i) do
      platform = $game_map.platform_events[$2.to_i]
      return unless platform
      platform.clear if !$1 || platform.fall?
    end
  end
  #--------------------------------------------------------------------------
  # * New method: call_reset_platform
  #--------------------------------------------------------------------------
  def call_reset_platform
    note.scan(/<RESET (FALLEN )?PLATFORM: (\d+)>/i) do
      platform = $game_map.platform_events[$2.to_i]
      return unless platform
      platform.reset if !$1 || platform.fall?
    end
  end
  #--------------------------------------------------------------------------
  # * New method: call_clear_all_fallen_platform
  #--------------------------------------------------------------------------
  def call_clear_all_platform
    $game_map.clear_all_platforms    if note =~ /<CLEAR ALL PLATFORM>/i 
    $game_map.clear_fallen_platforms if note =~ /<CLEAR ALL FALLEN PLATFORM>/i 
  end
  #--------------------------------------------------------------------------
  # * New method: call_reset_all_fallen_platform
  #--------------------------------------------------------------------------
  def call_reset_all_platform
    $game_map.reset_all_platforms    if note =~ /<RESET ALL PLATFORM>/i 
    $game_map.reset_fallen_platforms if note =~ /<RESET ALL FALLEN PLATFORM>/i 
  end
end

#==============================================================================
# ** Sprite_Character
#------------------------------------------------------------------------------
#  This sprite is used to display characters. It observes a instance of the
# Game_Character class and automatically changes sprite conditions.
#==============================================================================

class Sprite_Character < Sprite_Base
  #--------------------------------------------------------------------------
  # * Alias method: update_position
  #--------------------------------------------------------------------------
  alias :update_position_ve_moving_platform :update_position
  def update_position
    update_position_ve_moving_platform
    self.oy = @ch + @character.position_adjust if @ch
    self.z  =  0 if @character.falling? && @character.player?
    self.z  =  1 if bellow_character?
  end
  #--------------------------------------------------------------------------
  # * Alias method: update_position
  #--------------------------------------------------------------------------
  def bellow_character?
    return false unless @character.player?
    return false unless $game_player.falling? && $game_player.direction == 2
    @character.y <= $game_player.y + 1
  end
end