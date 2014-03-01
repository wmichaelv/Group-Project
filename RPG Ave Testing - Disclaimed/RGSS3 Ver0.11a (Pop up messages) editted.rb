#==============================================================================
# â˜… RGSS3_æ‘äººã®ã¤ã¶ã‚„ã Ver0.11a (Pop up messages)
#==============================================================================
=begin

ä½œè€…ï¼štomoaky
webã‚µã‚¤ãƒˆï¼šã²ãã‚‚è¨˜ã¯é–‰éŽ–ã—ã¾ã—ãŸã€‚ (http://hikimoki.sakura.ne.jp/)

Show me a balloon message overhead of character .

I set the message in the notes at the beginning of the command execution or content event name , .
Â Â <popup Shonen>
Â Â Â Â Set the boy a message type , message type
Â Â Â Â You can freely edit and add .
Â Â Â Â 
Â Â You can also use the script for the event command to display the message manually .
Â Â ( 0 , " I understand the movement ?") popup
Â Â Â Â Please specify the event that you want to view the message in the first number ,
Â Â Â Â Events of the ID are eligible player , in one or more events , -1 running on 0 .
Â Â Â Â 
Available the following control characters in the message , the content is the same as the display command of the sentence .
Â Â \ V [1] / \ N [1] / \ P / \ C [2] / \ G
Â Â Line breaks manually is possible in \ L other than the above .
Â Â 
Notes
Â Â If you specify a message type in both the annotation command and event name
Â Â Annotation command takes precedence . Only in the event page is not specified in the annotation command
Â Â Specified by the event name is enabled .

Required Graphics
  Graphics/System/popup_window.png
  
2013.08.27  Ver0.11a
  å‡ºç¾æ¡ä»¶ã‚’æº€ãŸã—ã¦ã„ãªã„ã‚¤ãƒ™ãƒ³ãƒˆãŒã‚ã‚‹ã¨ã‚¨ãƒ©ãƒ¼è½ã¡ã™ã‚‹ä¸å…·åˆã‚’ä¿®æ­£
  
2013.08.20ã€€Ver0.1a
  å…¬é–‹

=end

#==============================================================================
# â–  è¨­å®šé …ç›®
#==============================================================================
module TMpopup
  FONT_SIZE = 16                  # Font Size of the message
  BACK_OPACITY = 96               # Opacity of the window
  MESSAGE_DURATION = 240          # Duration of popup in frames
  
  MIN_INTERVAL = 180              # Minimum interval between messages in frames
  MAX_INTERVAL = 360              # Maximum interval between messages in frames
  
  # Set Message Type here.
  # This is an array of quotes to say. Keep in ''
  DATABASE = {}
  DATABASE["Eavesdrop"] = ['Drive to Djoba', '\C[2]Hi', '\N[1]Never']
  DATABASE["Eavesdrop2"] = ['Whoa', 'Trying to beat this mission!']
  
  YIN_BUBBLE_WIDTH = 220
  
  YIN_LINE_HEIGHT  = 14
end

#==============================================================================
# â–  Game_Character
#==============================================================================
class Game_Character
  attr_accessor :yin_popup_width
  attr_accessor :yin_popup_time
  attr_accessor :yin_popupping
  attr_accessor :yin_popup_life
  def yin_popup_life
    @yin_popup_life ||= 60
    @yin_popup_life
  end
  def yin_popup_life=(v)
    @yin_popup_life = v
  end
  
  #--------------------------------------------------------------------------
  # â—‹ ç¾åœ¨ã®ã¤ã¶ã‚„ãå†…å®¹ã‚’è¿”ã™
  #--------------------------------------------------------------------------
  def popup
    @popup
  end
  #--------------------------------------------------------------------------
  # â—‹ ã¤ã¶ã‚„ãã‚’ã‚»ãƒƒãƒˆ
  #--------------------------------------------------------------------------
  def set_popup(text, width = nil, time = nil)
    @popup = text
    @yin_popup_width = width ? width : TMpopup::YIN_BUBBLE_WIDTH
    @yin_popup_time = time
    @yin_popupping = true
  end
end

#==============================================================================
# â–  Game_Interpreter
#==============================================================================
class Game_Interpreter
  #--------------------------------------------------------------------------
  # â— æŒ‡å®šã—ãŸIDã®ã‚¤ãƒ™ãƒ³ãƒˆã«ã¤ã¶ã‚„ãã‚’å¼·åˆ¶
  #--------------------------------------------------------------------------
  def popup(id, text, width = TMpopup::YIN_BUBBLE_WIDTH, time = nil)
    #Fiber.yield while $game_map && $game_map.events[@event_id].yin_popupping
    #@event.yin_popupping = true
    if id == 0
      event = $game_player
    elsif id >= 1
      event = $game_map.events[id]
    end#$game_map.interpreter.get_character(id) # Yin was here
    if event
      text = convert_special_characters(text)
      nlines = text.split(' ')
      tlines = ['']
      textzb = Bitmap.new(32, 32)
      textzb.font.size = TMpopup::FONT_SIZE
      special_colors = {}
      line_index = 0
      nlines.each_with_index {|w|
      wd = w.dup
      skip = false
      loop do
        c = wd.slice!(/./m)
        case c
        when nil
          break
        when "\x01"
          w.sub(/\[([0-9]+)\]/, "")
          font_color = text_color($1.to_i)
          special_colors[line_index] = {}
          windex = tlines.last.split(' ').last
          special_colors[line_index][windex] = font_color
          skip = true
        end
      end
      next if skip
      tw, ww = textzb.text_size(tlines.last).width, textzb.text_size(' ' + w).width
      aw = width ? width : TMpopup::YIN_BUBBLE_WIDTH
      line_index += 1 if tw + ww >= aw
      tw + ww < aw ? tlines[-1] += ' ' + w : tlines << w}
      linewidth = textzb.text_size(tlines[0]).width
      textzb.dispose
      tlines.first[0] = ''
      t = Graphics.frame_rate * tlines.size
      @yin_popup_duration = time ? time : t
      width = linewidth if tlines.size == 1 && width > linewidth
      event.set_popup([tlines, special_colors], width, @yin_popup_duration) 
    end
 end
   #--------------------------------------------------------------------------
  # â—‹ ç‰¹æ®Šæ–‡å­—ã®å¤‰æ›
  #--------------------------------------------------------------------------
  def convert_special_characters(text)
    text.gsub!(/\\/)               { "\e" }
    text.gsub!(/\e\e/)             { "\\" }
    text.gsub!(/\eV\[([0-9]+)\]/i) { $game_variables[$1.to_i] }
    text.gsub!(/\eV\[([0-9]+)\]/i) { $game_variables[$1.to_i] }
    text.gsub!(/\eN\[([0-9]+)\]/i) { actor_name($1.to_i) }
    text.gsub!(/\eP\[(\d+)\]/i)    { party_member_name($1.to_i) }
    text.gsub!(/\eG/i)             { Vocab::currency_unit }
    text.gsub!(/\eLB/i)             { "\x00" }
    text.gsub!(/\eC\[([0-9]+)\]/i) { "\x01[#{$1}]" }
    text
  end
    def text_color(n)
    x = (n % 8) * 8
    y = 32 + (n / 8) * 8
    return Cache.system("popup_window").get_pixel(x, y)
  end
   def yin_wait_for_popup
     @yin_popup_duration.times { Fiber.yield }
  end
end

#==============================================================================
# â–  Sprite_Character
#==============================================================================
class Sprite_Character
  #--------------------------------------------------------------------------
  # â— ã‚ªãƒ–ã‚¸ã‚§ã‚¯ãƒˆåˆæœŸåŒ–
  #     viewport  : ãƒ“ãƒ¥ãƒ¼ãƒãƒ¼ãƒˆ
  #     character : ã‚­ãƒ£ãƒ©ã‚¯ã‚¿ãƒ¼ (Game_Character)
  #--------------------------------------------------------------------------
  alias tmpopup_sprite_character_initialize initialize
  def initialize(viewport, character = nil)
    @bitmap_popup = Cache.system("popup_window")
    @popup_duration = 0
    tmpopup_sprite_character_initialize(viewport, character)
  end
  #--------------------------------------------------------------------------
  # â— è§£æ”¾
  #--------------------------------------------------------------------------
  alias tmpopup_sprite_character_dispose dispose
  def dispose
    dispose_popup
    tmpopup_sprite_character_dispose
  end
  #--------------------------------------------------------------------------
  # â—‹ ãƒ•ã‚­ãƒ€ã‚·ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã®è§£æ”¾
  #--------------------------------------------------------------------------
  def dispose_popup
    if @popup_sprite
      @popup_sprite.bitmap.dispose if @popup_sprite.bitmap
      @popup_sprite.dispose
      @popup_sprite = nil
    end
  end
  #--------------------------------------------------------------------------
  # â— ãã®ä»–ã®æ›´æ–°
  #--------------------------------------------------------------------------
  alias tmpopup_sprite_character_update_other update_other
  def update_other
    tmpopup_sprite_character_update_other
    update_popup
  end
  #--------------------------------------------------------------------------
  # â—‹ ãƒ•ã‚­ãƒ€ã‚·ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã®æ›´æ–°
  #--------------------------------------------------------------------------
  def update_popup
    if @popup_duration > 0
      @popup_duration -= 1
      @character.yin_popup_life = @popup_duration
      if @popup_duration == 0
        @character.set_popup(nil)
      else
        @popup_sprite.x = x
        @popup_sprite.y = y - height
        @popup_sprite.opacity = @popup_duration * 24
      end
    end
  end
  #--------------------------------------------------------------------------
  # â— æ–°ã—ã„ã‚¨ãƒ•ã‚§ã‚¯ãƒˆã®è¨­å®š
  #--------------------------------------------------------------------------
  alias tmpopup_sprite_character_setup_new_effect setup_new_effect
  def setup_new_effect
    tmpopup_sprite_character_setup_new_effect
    if @popup != @character.popup
      @popup = @character.popup
      start_popup(@popup, @character.yin_popup_time)
    end
  end
  #--------------------------------------------------------------------------
  # â—‹ æ–‡å­—è‰²å–å¾—
  #     n : æ–‡å­—è‰²ç•ªå· (0ï½ž31)
  #--------------------------------------------------------------------------


  #--------------------------------------------------------------------------
  # â—‹ ã‚¢ã‚¯ã‚¿ãƒ¼ n ç•ªã®åå‰ã‚’å–å¾—
  #--------------------------------------------------------------------------
  def actor_name(n)
    actor = n >= 1 ? $game_actors[n] : nil
    actor ? actor.name : ""
  end
  #--------------------------------------------------------------------------
  # â—‹ ãƒ‘ãƒ¼ãƒ†ã‚£ãƒ¡ãƒ³ãƒãƒ¼ n ç•ªã®åå‰ã‚’å–å¾—
  #--------------------------------------------------------------------------
  def party_member_name(n)
    actor = n >= 1 ? $game_party.members[n - 1] : nil
    actor ? actor.name : ""
  end
  #--------------------------------------------------------------------------
  # â—‹ ãƒ•ã‚­ãƒ€ã‚·ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸è¡¨ç¤ºã®é–‹å§‹
  #--------------------------------------------------------------------------
  def start_popup(text, duration)
    dispose_popup
    return if text && text[0].empty? || !text#unless text
    tlines = text[0]
    special_colors = text[1]
    t = Graphics.frame_rate * tlines.size
    @popup_duration = duration ? duration : t
    pos = {:x => 4, :y => 0, :width => 0, :line_height => TMpopup::FONT_SIZE + 4}
    bitmap = Bitmap.new(@character.yin_popup_width, 
    (tlines.size + 1) * TMpopup::YIN_LINE_HEIGHT) # Max width changed by Yin.
    bitmap.font.size = TMpopup::FONT_SIZE
    tlines.each_with_index {|line, index|
    wx = 0
    bbww = (bitmap.width - bitmap.text_size(line).width) / 2
    bbhh = -2#(bitmap.height - (tlines.size * TMpopup::YIN_LINE_HEIGHT)) / 2
    #msgbox special_colors[index]
    line.split(' ').each {|word|
    bitmap.draw_text(bbww + wx, bbhh + TMpopup::YIN_LINE_HEIGHT * index, bitmap.width,
    32, word, 0)
    wx += bitmap.text_size(word + ' ').width
    if special_colors[index] && special_colors[index][word]
      bitmap.font.color = special_colors[index][word]
    end}}
    w = [pos[:x], pos[:width]].max + 4
    h = pos[:y] + (pos[:x] == 4 ? 0 : pos[:line_height])
    create_popup_sprite(@character.yin_popup_width,
    (tlines.size + 1) * TMpopup::YIN_LINE_HEIGHT)            # ãƒ•ã‚­ãƒ€ã‚·ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ã®ã‚¹ãƒ—ãƒ©ã‚¤ãƒˆã‚’ä½œæˆ
    @popup_sprite.bitmap.blt(0, (TMpopup::YIN_LINE_HEIGHT / 8),
    bitmap, bitmap.rect)
    bitmap.dispose
    update_popup
  end
  #--------------------------------------------------------------------------
  # â—‹ æ”¹è¡Œã®å‡¦ç†
  #--------------------------------------------------------------------------
  def process_new_line(pos)
    pos[:width] = pos[:x] if pos[:width] < pos[:x]
    pos[:x] = 4
    pos[:y] += pos[:line_height]
  end
  #--------------------------------------------------------------------------
  # â—‹ ãƒ•ã‚­ãƒ€ã‚·ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ã®ã‚¹ãƒ—ãƒ©ã‚¤ãƒˆã‚’ä½œæˆ
  #--------------------------------------------------------------------------
  def create_popup_sprite(width, height)
    @popup_sprite = ::Sprite.new(nil)
    @popup_sprite.z = 90
    @popup_sprite.ox = width / 2
    @popup_sprite.oy = height + 4
    @popup_sprite.bitmap = Bitmap.new(width, height + 8)
    rect = Rect.new(0, 0, 8, 8)
    alpha = TMpopup::BACK_OPACITY
    @popup_sprite.bitmap.blt(0, 0, @bitmap_popup, rect, alpha)
    rect.x += 8
    @popup_sprite.bitmap.blt(width - 8, 0, @bitmap_popup, rect, alpha)
    rect.y += 8
    @popup_sprite.bitmap.blt(width - 8, height - 8, @bitmap_popup, rect, alpha)
    rect.x -= 8
    @popup_sprite.bitmap.blt(0, height - 8, @bitmap_popup, rect, alpha)
    rect.set(16, 0, 8, 8)
    @popup_sprite.bitmap.blt(@popup_sprite.ox - 4, height, @bitmap_popup, rect, alpha)
    color = @bitmap_popup.get_pixel(8, 8)
    color.alpha = alpha
    @popup_sprite.bitmap.fill_rect(8, 0, width - 16, height, color)
    @popup_sprite.bitmap.fill_rect(0, 8, 8, height - 16, color)
    @popup_sprite.bitmap.fill_rect(width - 8, 8, 8, height - 16, color)
  end
end