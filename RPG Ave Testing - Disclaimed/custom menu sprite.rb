class Scene_Menu < Scene_MenuBase
  alias aliasing_Scene_Menu_start start
  def start
    aliasing_Scene_Menu_start
    create_custom_sprite_for_status
  end
  
  def create_custom_sprite_for_status
    @custom_sprite = Sprite.new
    @custom_sprite.bitmap = Cache.system("color")
    @custom_sprite.x = @command_window.width
    @custom_sprite.z = 200
  end
  
  def terminate
    super
    @custom_sprite.dispose
  end
end