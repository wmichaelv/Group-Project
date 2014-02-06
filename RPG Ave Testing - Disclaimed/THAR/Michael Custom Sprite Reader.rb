#==============================================================================
# Michael Let's Change The Sprite
#==============================================================================

module Touhou

  FolderSources = Hash.new {|h,k| h[k]=[]}
  
  spriteBattler = [

  	"Graphics\\th123 image\\character\\alice",
  	"Graphics\\th123 image\\character\\aya",
  	"Graphics\\th123 image\\character\\chirno",
  	"Graphics\\th123 image\\character\\hong",
  	"Graphics\\th123 image\\character\\iku",
  	"Graphics\\th123 image\\character\\komachi",
  	"Graphics\\th123 image\\character\\marisa",
  	"Graphics\\th123 image\\character\\patchouli",
  	"Graphics\\th123 image\\character\\reimu",
  	"Graphics\\th123 image\\character\\reisen",
  	"Graphics\\th123 image\\character\\remilia",
  	"Graphics\\th123 image\\character\\sakuya",
  	"Graphics\\th123 image\\character\\sanae",
  	"Graphics\\th123 image\\character\\suika",
  	"Graphics\\th123 image\\character\\suwako",
  	"Graphics\\th123 image\\character\\tenshi",
  	"Graphics\\th123 image\\character\\utsuho",
  	"Graphics\\th123 image\\character\\youmu",
  	"Graphics\\th123 image\\character\\yukari",
  	"Graphics\\th123 image\\character\\yuyuko",

  ]


  spriteAnimate = [

  	"Graphics\\th123 image\\character\\alice",
  	"Graphics\\th123 image\\character\\aya",
  	"Graphics\\th123 image\\character\\chirno",
  	"Graphics\\th123 image\\character\\hong",
  	"Graphics\\th123 image\\character\\iku",
  	"Graphics\\th123 image\\character\\komachi",
  	"Graphics\\th123 image\\character\\marisa",
  	"Graphics\\th123 image\\character\\patchouli",
  	"Graphics\\th123 image\\character\\reimu",
  	"Graphics\\th123 image\\character\\reisen",
  	"Graphics\\th123 image\\character\\remilia",
  	"Graphics\\th123 image\\character\\sakuya",
  	"Graphics\\th123 image\\character\\sanae",
  	"Graphics\\th123 image\\character\\suika",
  	"Graphics\\th123 image\\character\\suwako",
  	"Graphics\\th123 image\\character\\tenshi",
  	"Graphics\\th123 image\\character\\utsuho",
  	"Graphics\\th123 image\\character\\youmu",
  	"Graphics\\th123 image\\character\\yukari",
  	"Graphics\\th123 image\\character\\yuyuko",

  ]

  audio = [

  	"Graphics\\th123 image\\character\\alice",
  	"Graphics\\th123 image\\character\\aya",
  	"Graphics\\th123 image\\character\\chirno",
  	"Graphics\\th123 image\\character\\hong",
  	"Graphics\\th123 image\\character\\iku",
  	"Graphics\\th123 image\\character\\komachi",
  	"Graphics\\th123 image\\character\\marisa",
  	"Graphics\\th123 image\\character\\patchouli",
  	"Graphics\\th123 image\\character\\reimu",
  	"Graphics\\th123 image\\character\\reisen",
  	"Graphics\\th123 image\\character\\remilia",
  	"Graphics\\th123 image\\character\\sakuya",
  	"Graphics\\th123 image\\character\\sanae",
  	"Graphics\\th123 image\\character\\suika",
  	"Graphics\\th123 image\\character\\suwako",
  	"Graphics\\th123 image\\character\\tenshi",
  	"Graphics\\th123 image\\character\\utsuho",
  	"Graphics\\th123 image\\character\\youmu",
  	"Graphics\\th123 image\\character\\yukari",
  	"Graphics\\th123 image\\character\\yuyuko",

  ]

  FolderSources['Battler'] << spriteBattler
  FolderSources['Animate'] << spriteAnimate
  FolderSources['audio']   << audio


end

module Cache

  def self.touhou(folder, filename)

    load_bitmap("#{folder}/", "#{filename}")

  end

end

#==============================================================================
# Sprite_Character
#==============================================================================
class Sprite_Character < Sprite_Base
	def set_character_bitmap
    
    if @character.class == Game_Player
      
      if (@character.actor.name == 'Alice')
        
        $m_action = 'stand' if $m_action.nil?
        unless $m_counter.nil?
          case $m_action
          when 'stand'
            $m_counter += 0.33
            $m_counter = 0 if $m_counter > 15
          end
        end
        $m_counter = 0 if $m_counter.nil?
        self.bitmap = Cache.touhou(Touhou::FolderSources['Battler'][0][0], "#{$m_action}%03d" % $m_counter)
        $m_x = (Graphics.width - bitmap.width) / 2 if $m_x.nil?
        $m_y = (Graphics.height - bitmap.height - bitmap.height / 2) / 2 if $m_y.nil?
        self.x = @character.screen_x - bitmap.width / 2
        self.y = @character.screen_y - bitmap.height + 16
        if self.x < 0
          self.src_rect.x = -self.x
          self.x = 0
        end
        if self.y < 0
          self.src_rect.y = -self.y
          self.y = 0
        end
      end
    
    else
    
      self.bitmap = Cache.character(@character_name)
      sign = @character_name[/^[\!\$]./]
      if sign && sign.include?('$')
        @cw = bitmap.width / 3
        @ch = bitmap.height / 4
      else
        @cw = bitmap.width / 12
        @ch = bitmap.height / 8
      end
      self.ox = @cw / 2
      self.oy = @ch
      
    end
    
  end
  
  def update_src_rect
    if @character.class == Game_Player
      if (@character.actor.name == 'Alice')
        
        $m_action = 'stand' if $m_action.nil?
        unless $m_counter.nil?
          case $m_action
          when 'stand'
            $m_counter += 0.33
            $m_counter = 0 if $m_counter > 15
          end
        end
        $m_counter = 0 if $m_counter.nil?
        self.bitmap = Cache.touhou(Touhou::FolderSources['Battler'][0][0], "#{$m_action}%03d" % $m_counter)
        self.x = @character.screen_x - bitmap.width / 2
        self.y = @character.screen_y - bitmap.height + 16
        if self.x < 0
          self.src_rect.x = -self.x
          self.x = 0
        end
        if self.y < 0
          self.src_rect.y = -self.y
          self.y = 0
        end
      end
      
    else
      
      if @tile_id == 0
        index = @character.character_index
        pattern = @character.pattern < 3 ? @character.pattern : 1
        sx = (index % 4 * 3 + pattern) * @cw
        sy = (index / 4 * 4 + (@character.direction - 2) / 2) * @ch
        self.src_rect.set(sx, sy, @cw, @ch)
      end
      
    end
  end
  
  def update_position
    if @character.class == Game_Player
      if (@character.actor.name == "Alice")
        #$just_once ||= 1
        #p "Its PASSING!!" if $just_once == 1 && $just_once += 1
        case $game_player.direction
        when 2
          #down
          if Input.trigger?(:DOWN) || Input.repeat?(:DOWN)
            #$m_y += ($game_map.scroll_type == 2 || $game_map.scroll_type == 3) ? 32 : 0
          end
        when 4
          #left
          if Input.trigger?(:LEFT) || Input.repeat?(:LEFT)
            #$m_x -= ($game_map.scroll_type == 1 || $game_map.scroll_type == 3) ? 32 : 0
          end
        when 6 
          #right
          if Input.trigger?(:RIGHT) || Input.repeat?(:RIGHT)
            #$m_x += ($game_map.scroll_type == 1 || $game_map.scroll_type == 3) ? 32 : 0
          end
        when 8
          #up
          if Input.trigger?(:UP) || Input.repeat?(:UP)
            #$m_y -= ($game_map.scroll_type == 2 || $game_map.scroll_type == 3) ? 32 : 0
          end
        end
      end
 
    else
      
      move_animation(@character.screen_x - x, @character.screen_y - y)
      self.x = @character.screen_x
      self.y = @character.screen_y
      self.z = @character.screen_z
    
    end
  
  end
  
end
