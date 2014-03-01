#==============================================================================
#    Dynamic Sound Emitting Events
#    Version: 1.0.4
#    Author: modern algebra (rmrk.net)
#    Date: 27 October 2012
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#  Description:
#    
#    This script allows you to create events that emit sounds whose volume 
#   depends on the distance that the event is from the player. In other words,
#   the closer the player is to the event, the louder the sound. It works for
#   SEs, MEs, BGMs and BGSes, but note that you can only use one BGM or BGS at
#   a time, so you can't have a map BGM or BGS simultaneously, nor can you have
#   more than one event play a BGM or BGS.
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#  Instructions:
#    
#    Paste this script into its own slot in the Script Editor, above Main but
#   below Materials.
#
#    To set this script up, you need to insert an event comment as the first
#   line on an event's page. If you need more space, you can also create more
#   comments immediately after the first. Next, you need to insert codes in 
#   the following formats:
#
#      \emit_BGM {
#        name = ""     
#        max_volume = 80      
#        pitch = 100      
#        radius = 15
#        source_radius = 0
#      }                 
#
#   Change BGM to whatever type of sound effect you want to emit. It can be
#  BGM, BGS, SE, or ME. Each event can only emit one type of sound. The values 
#  listed for each property above are the default values if you choose to omit 
#  them. The only one that is required to be directly set everytime is the 
#  name. They also do not need to all be on separate lines, you can also 
#  separate them by semicolons. All the properties do what you would expect:
#
#        name = ""
#          Place the name of the sound file you want to play between the " "
#        max_volume = 80
#          Replace 80 with the maximum volume of the sound
#        pitch = 100
#          Replace 100 with the pitch you want for the sound.
#        radius = 15
#          Replace 15 with the radius of the sound. Unless the player is within
#          that number of squares, he or she won't hear the sound at all. As he
#          or she approaches the event, the volume will increase proportionate
#          to the max_volume.
#        source_radius = 0
#          This is the radius around the source where the sound is at maximum
#          volume. This is added to the radius, so if, for instance, this is 2
#          and radius is 6, then the sound will play at max volume when within
#          a radius of 2 of the event, and the sound will only be silent
#          completely once the player is outside of a radius of 8. 
#
#    If you are using SEs or MEs, then there are two additional properties.
#   Firstly, you can set a range for the pitch, and the pitch will be chosen
#   at random from within that range, like this:
#
#        pitch = 75...125
#
#   In that example, the pitch would be somewhere between 75 and 125 each time
#   it played, and it would reselect randomly every time it plays. The other
#   thing you can set for SEs and MEs is the time, which you choose in frames 
#   (60 frames is 1 second) and this similarly allows you to choose either an 
#   integer or a range. Example 1:
#
#        time = 120
#
#   In that example, the SE would play every 120 frames (2 seconds) exactly.
#   Example 2:
#
#        time = 600...900
#
#   In this example, the time would be selected randomly from that range, 
#   meaning it would play every 600-900 frames (10-15 seconds). So one time it
#   might be 12 seconds, another time it might be 11, etc..
#
#    Finally, there is one more feature. If you want the source of the sound to
#   be bigger than just one square (for instance, if you want it to be a
#   waterfall that is 4 squares across and 3 squares down), then you can do that
#   by placing the event at the upper left corner of the rectangle and adding 
#   the x and y additions in square brackets right after the BGM/BGS/SE/ME 
#   setting, like so:
#
#      \emit_BGS[x, y] { ... }
#
#   In the waterfall case, it would be [3, 2], since the first square is
#  already included.
#``````````````````````````````````````````````````````````````````````````````
#  EXAMPLES:
#
#    \emit_BGM { name = "Fire" }
#
#      This event would emit the "Fire" BGM. Since no other properties are set,
#     they assume the default values: volume = 80; pitch = 100; radius = 15.
#
#    \emit_BGS[0, 4] {
#      name = "River"; volume = 100;
#      radius = 10 }
#       
#      This event would emit the "River" BGS. Its source is extended to include
#     the 4 squares below the event, so the source will be 5 squares, including
#     the event's square. The volume when you are on any of those squares is
#     100, and as you move away, the volume will decrease proportionate to the 
#     square to which you are closest. The radius is 10, so once you are no 
#     longer within 10 squares of any of the source squares, you will no longer
#     hear it.
#
#    \emit_SE { name = "Dog";
#      radius = 12; pitch = 90..120;
#      time = 420...720; source_radius = 3 }
#
#      This event will play the "Dog" SE every 7 - 12 seconds. When it does, 
#     its pitch will be randomly selected from between 90 and 120. The 
#     source_radius is 3, so the SE will play at max volume if within three 
#     squares of the dog, and since the radius is 12 squares, this means that
#     the total radius is 15 squares.
#``````````````````````````````````````````````````````````````````````````````
#  If you are worried about lag, then please go to line 146 and change the 
# value of SMOOTH_TRANSITION to false.
#==============================================================================

$imported = {} unless $imported
$imported[:MA_DynamicSoundEmittingEvents] = true

#==============================================================================
# ** Sound Emitter
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#  This class holds sound emission data and updating methods
#==============================================================================

class MA_SoundEmitter
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Public Instance Variables
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  attr_accessor :event_id
  attr_accessor :sound_type
  attr_accessor :radius
  attr_accessor :source_radius
  attr_accessor :max_volume
  attr_accessor :pitch
  attr_accessor :time
  attr_accessor :size_x
  attr_accessor :size_y
  attr_reader   :filename
  attr_reader   :audiofile
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Object Initialize
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def initialize(event_id = 0)
    @event_id = event_id
    clear
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Clear
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def clear
    RPG.const_get(@sound_type).stop if audiofile && @sound_type == :BGM || @sound_type == :BGS
    @sound_type = :SE
    @radius = 15
    @size_x = @size_y = @source_radius = 0
    @max_volume = 80
    @pitch = 100
    @time = 600..900
    @player_x = @player_y = @event_x = @event_y = -1
    load_audiofile("")
    reset_timer
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Frame Update
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def update
    return unless audiofile && $game_map.events[event_id]
    case @sound_type
    when :SE, :ME
      unless @timer <= 0
        @timer -= 1
        return
      end
      audiofile.volume = calc_volume if recalc_vol?
      audiofile.pitch = calc_pitch
      reset_timer
    when :BGM, :BGS
      return unless recalc_vol?
      new_vol = calc_volume # Distance calculation
      # If variation < 3 and not transitioning to limit
      return if audiofile.volume == new_vol || 
        (audiofile.volume.between?(new_vol - 2, new_vol + 2) && 
        (audiofile.volume != 0 && new_vol != 0) &&
        (audiofile.volume != max_volume && new_vol != max_volume))
      audiofile.volume = new_vol
    end
    audiofile.play
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Recalculate Volume? 
  # * Reset Position Vars
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
madsee_pos_methods = <<POS_END

  def recalc_vol?
    event = $game_map.events[event_id]
    !(@player_x == $game_player.x && @event_x == event.x && 
      @player_y == $game_player.y && @event_y == event.y)
  end

  def reset_position_vars
    event = $game_map.events[event_id]
    @player_x, @player_y = $game_player.x, $game_player.y
    @event_x, @event_y = event.x, event.y
  end
POS_END
  eval(madsee_pos_methods)
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Reset Timer
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def reset_timer
    @timer = time.is_a?(Integer) ? time : time.first + rand(time.last - time.first) 
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Calculate Volume
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def calc_volume
    reset_position_vars
    r = radius + source_radius + 1
    # Get real horizontal distance between emitter and player
    raw_dist_x = @player_x - @event_x
    dist_x = raw_dist_x > 0 ? [raw_dist_x - @size_x, 0].max : -raw_dist_x
    if $game_map.loop_horizontal? # Accomodate if map looping
      loop_x = [$game_map.width - dist_x - @size_x, 0].max
      dist_x = loop_x if loop_x < dist_x
    end
    return 0 if dist_x > r
    # Get real vertical distance between emitter and player
    raw_dist_y = @player_y - @event_y
    dist_y = raw_dist_y > 0 ? [raw_dist_y - @size_y, 0].max : -raw_dist_y
    if $game_map.loop_vertical? # Accomodate if map loops vertically
      loop_y = [$game_map.height - dist_y - @size_y, 0].max
      dist_y = loop_y if loop_y < dist_y
    end
    return 0 if dist_y > r
    # Get diagonal distance
    dist = Math.hypot(dist_x, dist_y)
    return dist > r ? 0 : (([(r - dist) / (r - source_radius), 1].min)*max_volume).to_i
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Calculate Pitch
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def calc_pitch
    pitch.is_a?(Integer) ? pitch : pitch.first + rand(pitch.last - pitch.first) 
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Load AudioFile
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def load_audiofile(filename = @filename)
    return if @filename == filename
    @filename = filename
    @audiofile = RPG.const_get(@sound_type).new(@filename)
    @audiofile.pitch = calc_pitch
  end
  alias :"filename=" :load_audiofile
end
  
#==============================================================================
# ** Game_Map
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#  Summary of Changes:
#    aliased methods - setup
#==============================================================================

class Game_Map
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Setup Events
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  alias madsee_setup_3kq4 setup
  def setup(*args)
    #  Clear Emitters if they were present in last map, primarily to stop the
    # them if they are playing BGMs or BGSes.
    @events.values.each { |e| 
      e.madsee_emitter.clear if e.madsee_emitter } if @events
    madsee_setup_3kq4(*args) # Call original method
  end
end

#==============================================================================
# ** Game_Event
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#  Summary of Changes:
#    aliased methods - initialize; clear_page_settings; setup_page_settings; 
#      update
#    new method - madsee_emitter; madsee_setup_emitter; ma_collect_init_comment
#==============================================================================

class Game_Event
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Public Instance Variables
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  attr_reader :madsee_emitter
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Setup Page Settings
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  alias madsee_stuppges_6ag6 setup_page_settings
  def setup_page_settings(*args)
    madsee_stuppges_6ag6(*args) # Call original method
    madsee_setup_emitter
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Clear Page Settings
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  alias madsee_clrpageset_4sm7 clear_page_settings
  def clear_page_settings(*args)
    madsee_clrpageset_4sm7(*args) # Call original method
    @madsee_emitter.clear if @madsee_emitter
    @madsee_emitter = nil
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Setup Emitter
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def madsee_setup_emitter
    # Collect First comment
    comment = ma_collect_init_comment
    if comment[/\\EMIT[_ ](BGM|BGS|ME|SE)\[?(\d*)[;;,\s]*(\d*)\]?\s*\{(.+?)\}/mi]
      @madsee_emitter ? @madsee_emitter.clear : @madsee_emitter = MA_SoundEmitter.new(@id)
      @madsee_emitter.sound_type = $1.upcase.to_sym
      @madsee_emitter.size_x = $2.to_i
      @madsee_emitter.size_y = $3.to_i
      props = $4.dup
      props.gsub!(/(?<!file)name/i) { "filename" }
      props.gsub!(/(?<!max_)volume/i) { "max_volume" }
      props.split(/[\n;]+/).each { |expression|
        if expression[/\A\s*(.+?)\s*=\s*(.+?)\s*\Z/]
          @madsee_emitter.send(:"#{$1.downcase}=", eval($2)) rescue p "#{$1.downcase} is not a valid property for a Sound Emitting Event"
        end
      }
      @madsee_emitter.audiofile.pitch = @madsee_emitter.calc_pitch
      @madsee_emitter.reset_timer
      @madsee_emitter = nil if @madsee_emitter.filename.empty?
    else
      @madsee_emitter.clear if @madsee_emitter
      @madsee_emitter = nil
    end
  end
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Collect First Comment
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  def ma_collect_init_comment
    comment, i = "", 0
    while !@list[i].nil? && (@list[i].code == 108 || @list[i].code == 408)
      comment += @list[i].parameters[0] + "\n"
      i += 1
    end
    comment
  end unless self.method_defined?(:ma_collect_init_comment)
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # * Frame Update
  #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  alias madsee_updt_1ex0 update
  def update(*args)
    madsee_updt_1ex0(*args) # Call original method
    @madsee_emitter.update if @madsee_emitter
  end
end