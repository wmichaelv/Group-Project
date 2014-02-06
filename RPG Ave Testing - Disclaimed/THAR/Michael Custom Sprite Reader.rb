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

class Sprite_Character < Sprite_Base
	def set_character_bitmap
    
    if (@character.id == 1)
      
      @counter += 1 unless @counter.nil?
      @counter = 0 if @counter.nil?
      self.bitmap = Cache.touhou(Touhou::FolderSources['Battler'][0][0], "stand%03d" % @counter)
      self.x = (Graphics.width - bitmap.width) / 2
      self.y = (Graphics.height - bitmap.height) / 2
      
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
    
    if (@character.id == 1)
      unless @counter.nil?
        @counter += 1
        @counter = 0 if @counter > 15
      end
      @counter = 0 if @counter.nil?
      self.bitmap = Cache.touhou(Touhou::FolderSources['Battler'][0][0], "stand%03d" % @counter)
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
    
    if (@character.id == 1)
      
    else
      
      move_animation(@character.screen_x - x, @character.screen_y - y)
      self.x = @character.screen_x
      self.y = @character.screen_y
      self.z = @character.screen_z
    
    end
  
  end
  
end

