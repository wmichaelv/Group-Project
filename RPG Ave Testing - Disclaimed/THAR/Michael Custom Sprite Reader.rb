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
      
      case @character.actor.name

      when 'Alice'
        
        @m_speed = 0.33 if @m_speed.nil?
        @m_act_nm = 'stand' if @m_act_nm.nil?
        @m_action = 'stand' if @m_action.nil?
        @m_counter = 0 if @m_counter.nil?
        dash = Input.press?(:SHIFT)
        walk = (!dash && @m_counter > 6)
        @m_counter += @m_speed
        
        case @m_act_nm

        when 'stand'

          @m_action = 'stand'
          @m_counter = 0 if @m_counter > 15

        when 'm_down'
          @m_action = 'dashFront' if Input.press?(:SHIFT)

          if @m_action == 'dashFront'
            @m_speed = (@m_counter > 3 && @m_counter < 4) ? ((!dash) ? 0.33 : 0) : 0.33
            (@m_counter = 0; @m_action = 'walkFront') if @m_counter > 6
          else
            @m_action = (Input.press?(:SHIFT) && !walk) ? 'dashFront' : 'walkFront'
            (@m_action == 'dashFront') ? @m_counter = 0 :
           ((@m_act_nm = 'stand' if !Input.repeat?(:DOWN); @m_counter = 0) if @m_counter > 9.9)
          end

        when 'm_left'
          @m_action = 'dashFront' if Input.press?(:SHIFT)

          if @m_action == 'dashFront'
            @m_speed = (@m_counter > 3 && @m_counter < 4) ? ((!dash) ? 0.33 : 0) : 0.33
            (@m_counter = 0; @m_action = 'walkFront') if @m_counter > 6
          else
            @m_action = (Input.press?(:SHIFT) && !walk) ? 'dashFront' : 'walkFront'
            (@m_action == 'dashFront') ? @m_counter = 0 :
            ((@m_act_nm = 'stand' if !Input.repeat?(:LEFT); @m_counter = 0) if @m_counter > 9.9)
          end

        when 'm_right'
          @m_action = 'dashFront' if Input.press?(:SHIFT)

          if @m_action == 'dashFront'
            @m_speed = (@m_counter > 3 && @m_counter < 4) ? ((!dash) ? 0.33 : 0) : 0.33
            (@m_counter = 0; @m_action = 'walkFront') if @m_counter > 6
          else
            @m_action = (Input.press?(:SHIFT) && !walk) ? 'dashFront' : 'walkFront'
            (@m_action == 'dashFront') ? @m_counter = 0 :
            ((@m_act_nm = 'stand' if !Input.repeat?(:RIGHT); @m_counter = 0) if @m_counter > 9.9)
          end

        when 'm_up'
          @m_action = 'dashFront' if Input.press?(:SHIFT)

          if @m_action == 'dashFront'
            @m_speed = (@m_counter > 3 && @m_counter < 4) ? ((!dash) ? 0.33 : 0) : 0.33
            (@m_counter = 0; @m_action = 'walkFront') if @m_counter > 6
          else
            @m_action = (Input.press?(:SHIFT) && !walk) ? 'dashFront' : 'walkFront'
            (@m_action == 'dashFront') ? @m_counter = 0 :
            ((@m_act_nm = 'stand' if !Input.repeat?(:UP); @m_counter = 0) if @m_counter > 9.9)
          end

        end

        self.bitmap = Cache.touhou(Touhou::FolderSources['Battler'][0][0], "#{@m_action}%03d" % @m_counter)
        @m_x = (Graphics.width - bitmap.width) / 2 if @m_x.nil?
        @m_y = (Graphics.height - bitmap.height - bitmap.height / 2) / 2 if @m_y.nil?
        self.x = @character.screen_x - bitmap.width / 2
        self.y = @character.screen_y - bitmap.height + 16
        self.mirror = (@m_act_nm == "m_left")
        
        (self.src_rect.x = -self.x; self.x = 0) if self.x < 0
        (self.src_rect.y = -self.y; self.y = 0) if self.y < 0

      else

			self.bitmap = Cache.character(@character_name)
			sign = @character_name[/^[\!\@]./]

			if sign && sign.include?('@')
				@cw = bitmap.width / 3
				@ch = bitmap.height / 4
			else
				@cw = bitmap.width / 12
				@ch = bitmap.height / 8
			end

				self.ox = @cw / 2
				self.oy = @ch
    
    else
    
      self.bitmap = Cache.character(@character_name)
      sign = @character_name[/^[\!\@]./]

      if sign && sign.include?('@')
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
        
        @m_act_nm = 'stand' if @m_act_nm.nil?
        @m_action = 'stand' if @m_action.nil?
        @m_counter = 0 if @m_counter.nil?
        
        dash = Input.press?(:SHIFT)
        walk = (!dash && @m_counter > 6)
        @m_counter += @m_speed
        
        case @m_act_nm
        when 'stand'

          @m_action = 'stand'
          @m_counter = 0 if @m_counter > 15

        when 'm_down'
          @m_action = 'dashFront' if Input.press?(:SHIFT)

          if @m_action == 'dashFront'
            @m_speed = (@m_counter > 3 && @m_counter < 4) ? ((!dash) ? 0.33 : 0) : 0.33
            (@m_counter = 0; @m_action = 'walkFront') if @m_counter > 6
          else
            @m_action = (Input.press?(:SHIFT) && !walk) ? 'dashFront' : 'walkFront'
            (@m_action == 'dashFront') ? @m_counter = 0 :
           ((@m_act_nm = 'stand' if !Input.repeat?(:DOWN); @m_counter = 0) if @m_counter > 9.9)
          end

        when 'm_left'
          @m_action = 'dashFront' if Input.press?(:SHIFT)

          if @m_action == 'dashFront'
            @m_speed = (@m_counter > 3 && @m_counter < 4) ? ((!dash) ? 0.33 : 0) : 0.33
            (@m_counter = 0; @m_action = 'walkFront') if @m_counter > 6
          else
            @m_action = (Input.press?(:SHIFT) && !walk) ? 'dashFront' : 'walkFront'
            (@m_action == 'dashFront') ? @m_counter = 0 :
            ((@m_act_nm = 'stand' if !Input.repeat?(:LEFT); @m_counter = 0) if @m_counter > 9.9)
          end

        when 'm_right'
          @m_action = 'dashFront' if Input.press?(:SHIFT)

          if @m_action == 'dashFront'
            @m_speed = (@m_counter > 3 && @m_counter < 4) ? ((!dash) ? 0.33 : 0) : 0.33
            (@m_counter = 0; @m_action = 'walkFront') if @m_counter > 6
          else
            @m_action = (Input.press?(:SHIFT) && !walk) ? 'dashFront' : 'walkFront'
            (@m_action == 'dashFront') ? @m_counter = 0 :
            ((@m_act_nm = 'stand' if !Input.repeat?(:RIGHT); @m_counter = 0) if @m_counter > 9.9)
          end

        when 'm_up'
          @m_action = 'dashFront' if Input.press?(:SHIFT)

          if @m_action == 'dashFront'
            @m_speed = (@m_counter > 3 && @m_counter < 4) ? ((!dash) ? 0.33 : 0) : 0.33
            (@m_counter = 0; @m_action = 'walkFront') if @m_counter > 6
          else
            @m_action = (Input.press?(:SHIFT) && !walk) ? 'dashFront' : 'walkFront'
            (@m_action == 'dashFront') ? @m_counter = 0 :
            ((@m_act_nm = 'stand' if !Input.repeat?(:UP); @m_counter = 0) if @m_counter > 9.9)
          end

        end
        self.bitmap = Cache.touhou(Touhou::FolderSources['Battler'][0][0], "#{@m_action}%03d" % @m_counter)
        p "#{@m_action}%03d" % @m_counter
        self.x = @character.screen_x - bitmap.width / 2
        self.y = @character.screen_y - bitmap.height + 16
        self.mirror = (@m_act_nm == "m_left")

        (self.src_rect.x = -self.x; self.x = 0) if self.x < 0
        (self.src_rect.y = -self.y; self.y = 0) if self.y < 0

      else

      	if @tile_id == 0
	        index = @character.character_index
	        pattern = @character.pattern < 3 ? @character.pattern : 1
	        sx = (index % 4 * 3 + pattern) * @cw
	        sy = (index / 4 * 4 + (@character.direction - 2) / 2) * @ch
	        self.src_rect.set(sx, sy, @cw, @ch)
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
        #(p "it's passing"; @just_once = true) if (!@just_once)
        case $game_player.direction
        when 2
          #down
          (@m_counter = 0 if @m_act_nm != "m_down"; @m_act_nm = "m_down") if Input.press?(:DOWN)
        when 4
          #left
          (@m_counter = 0 if @m_act_nm != "m_left"; @m_act_nm = "m_left") if Input.press?(:LEFT)
        when 6 
          #right
          (@m_counter = 0 if @m_act_nm != "m_right"; @m_act_nm = "m_right") if Input.press?(:RIGHT)
        when 8
          #up
          (@m_counter = 0 if @m_act_nm != "m_up"; @m_act_nm = "m_up") if Input.press?(:UP)
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
