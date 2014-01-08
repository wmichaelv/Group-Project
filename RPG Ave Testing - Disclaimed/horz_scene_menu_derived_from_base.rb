#==============================================================================
# Scene_MenuBase
#==============================================================================
class Scene_MenuBase < Scene_Base
  def start
    super
    create_background
    @actor = $game_party.menu_actor
    create_command_window
    create_gold_window
    create_status_window
    create_actor_window
    create_help_window
    create_category_window
    create_item_window
  end
  def create_background
    @background_sprite = Sprite.new
    @background_sprite.bitmap = SceneManager.background_bitmap
    @background_sprite.color.set(16, 16, 16, 128)
  end
  def create_command_window
    @command_window = Window_MenuCommand.new
    @command_window.set_handler(:item,      method(:command_item))
    @command_window.set_handler(:load,      method(:command_load))
    @command_window.set_handler(:game_end,  method(:command_game_end))
    @command_window.set_handler(:cancel,    method(:return_scene))
  end
  def command_item
    SceneManager.call(Scene_Item)
  end
  def command_load
    SceneManager.call(Scene_Load)
  end
  def command_game_end
    SceneManager.call(Scene_End)
  end
  def create_gold_window
    @gold_window = Window_Gold.new
    @gold_window.x = 0
    @gold_window.y = Graphics.height - @gold_window.height
  end
  def create_status_window
    @status_window = Window_MenuStatus.new(@command_window.width, 0)
  end
  def create_actor_window
    @actor_window = Window_MenuActor.new
    @actor_window.set_handler(:ok,     method(:on_actor_ok))
    @actor_window.set_handler(:cancel, method(:on_actor_cancel))
  end
def item
    @item_window.item
  end
  def user
    $game_party.movable_members.max_by {|member| member.pha }
  end
  def cursor_left?
    @item_window.index % 2 == 0
  end
  def show_sub_window(window)
    width_remain = Graphics.width - window.width
    window.x = cursor_left? ? width_remain : 0
    @viewport.rect.x = @viewport.ox = cursor_left? ? 0 : window.width
    @viewport.rect.width = width_remain
    window.show.activate
  end
  def hide_sub_window(window)
    @viewport.rect.x = @viewport.ox = 0
    @viewport.rect.width = Graphics.width
    window.hide.deactivate
    activate_item_window
  end
  def on_actor_ok
    if item_usable?
      use_item
    else
      Sound.play_buzzer
    end
  end
  def on_actor_cancel
    hide_sub_window(@actor_window)
  end
  def determine_item
    if item.for_friend?
      show_sub_window(@actor_window)
      @actor_window.select_for_item(item)
    else
      use_item
      activate_item_window
    end
  end
  def activate_item_window
    @item_window.refresh
    @item_window.activate
  end
  def item_target_actors
    if !item.for_friend?
      []
    elsif item.for_all?
      $game_party.members
    else
      [$game_party.members[@actor_window.index]]
    end
  end
  def item_usable?
    user.usable?(item) && item_effects_valid?
  end
  def item_effects_valid?
    item_target_actors.any? do |target|
      target.item_test(user, item)
    end
  end
  def use_item_to_actors
    item_target_actors.each do |target|
      item.repeats.times { target.item_apply(user, item) }
    end
  end
  def use_item
    play_se_for_item
    user.use_item(item)
    use_item_to_actors
    check_common_event
    check_gameover
    @actor_window.refresh
  end
  def check_common_event
    SceneManager.goto(Scene_Map) if $game_temp.common_event_reserved?
  end
  def create_help_window
    @help_window = Window_Help.new
    @help_window.viewport = @viewport
  end
  def create_category_window
    @category_window = Window_ItemCategory.new
    @category_window.viewport = @viewport
    @category_window.help_window = @help_window
    @category_window.y = @help_window.height
    @category_window.set_handler(:ok,     method(:on_category_ok))
    @category_window.set_handler(:cancel, method(:return_scene))
  end
  def on_category_ok
    @item_window.activate
    @item_window.select_last
  end
  def create_item_window
    wy = @category_window.y + @category_window.height
    wh = Graphics.height - wy
    @item_window = Window_ItemList.new(0, wy, Graphics.width, wh)
    @item_window.viewport = @viewport
    @item_window.help_window = @help_window
    @item_window.set_handler(:ok,     method(:on_item_ok))
    @item_window.set_handler(:cancel, method(:on_item_cancel))
    @category_window.item_window = @item_window
  end
  def on_item_ok
    $game_party.last_item.object = item
    determine_item
  end
  def on_item_cancel
    @item_window.unselect
    @category_window.activate
  end
  def play_se_for_item
    Sound.play_use_item
  end
  def use_item
    super
    @item_window.redraw_current_item
  end
  def next_actor
    @actor = $game_party.menu_actor_next
    on_actor_change
  end
  def prev_actor
    @actor = $game_party.menu_actor_prev
    on_actor_change
  end
  def on_actor_change
  end
  def terminate
    super
    dispose_background
  end
  def dispose_background
    @background_sprite.dispose
  end
end
