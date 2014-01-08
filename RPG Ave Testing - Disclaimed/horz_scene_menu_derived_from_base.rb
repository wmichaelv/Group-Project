
#===============================================================================
#     Michael Customized Parthanandix's Simple Horizontal Menu
#
# Derived from Parthanandix's Simple Horizontal Menu
# Change: -Scene_Item is combined with Scene_Menu
#===============================================================================


module HelpText
  # Change the help text below for each of the menu options.
  Item_Help = "Use an item."
  Status_Help = "View your status."
  Equip_Help = "Equip armor or weapons."
  Skill_Help = "Use a skill."
  Formation_Help = "Change formation."
  Load_Help = "Load game data."
  Cancel_Help = "Exit the menu."
  End_Help = "Quit game."

  # This is to display help text when selecting an actor for a personal command.
  Select_Actor_Help = "Choose an actor."
end

class Window_Parthanandix < Window_HorzCommand
  def make_command_list
    add_command(Vocab::item, :item)
    add_command(Vocab::continue, :load)
    add_command(Vocab::game_end, :game_end)
    add_command(Vocab::cancel, :cancel)
  end
  def window_width
    return Graphics.width
  end
  def col_max
    return 5
  end
  def update_help
    super
    case self.index
    when 0
      @help_window.set_text(HelpText::Item_Help)
    when 1
      @help_window.set_text(HelpText::Load_Help)
    when 2
      @help_window.set_text(HelpText::End_Help)
    when 3
      @help_window.set_text(HelpText::Cancel_Help)
    end
  end
end
=begin #Seems unnecessary to override .________.
class Window_MenuStatus < Window_Selectable
  def window_width
    return 544
  end
  def window_height
    return 320
  end
  def draw_item(index)
    actor = $game_party.members[index]
    enabled = $game_party.battle_members.include?(actor)
    rect = item_rect(index)
    draw_item_background(index)
    draw_character(actor.character_name, actor.character_index, rect.x + 70 , rect.y + 54)
    draw_actor_simple_status(actor, rect.x + 108, rect.y)
  end
  def draw_item_background(index)
    if index == @pending_index
      contents.fill_rect(item_rect(index), pending_color)
    end
  end
  def draw_actor_simple_status(actor, x, y)
    draw_actor_name(actor, x + 40, y)
    draw_actor_level(actor, x + 40, y + line_height * 1)
    draw_actor_icons(actor, x + 40, y + line_height * 2)
    draw_actor_class(actor, x + 200, y)
    draw_actor_hp(actor, x + 200, y + line_height * 1)
    draw_actor_mp(actor, x + 200, y + line_height * 2)
  end
end
=end
class Window_NewHelp < Window_Base
  def initialize(line_number = 1)
    super(0, 0, 344, fitting_height(line_number))
  end
  def set_text(text)
    if text != @text
      @text = text
      refresh
    end
  end
  def clear
    set_text("")
  end
  def set_item(item)
    set_text(item ? item.description : "")
  end
  def refresh
    contents.clear
    draw_text_ex(4, 0, @text)
  end
end

class Scene_Map < Scene_Base
  def call_menu
    Sound.play_ok
    SceneManager.call(Scene_derived_by_michael)
    Window_MenuCommand::init_command_position
  end
end

class Scene_derived_by_michael < Scene_Base
  def start
    super
    create_background
    @actor = $game_party.menu_actor
    create_gold_window
    create_actor_window
    create_help_window
    create_command_window
    create_category_window
    create_item_window
  end

  def create_background
    @bgs = Sprite.new
    @bgs.bitmap = SceneManager.background_bitmap
    @bgs.color.set(16, 16, 16, 128)
  end

  def create_command_window
    @command_window = Window_Parthanandix.new(0,0)
    @command_window.viewport = @viewport
    @command_window.help_window = @help_window
    @command_window.set_handler(:item,      method(:command_item))
    @command_window.set_handler(:load,      method(:command_load))
    @command_window.set_handler(:game_end,  method(:command_game_end))
    @command_window.set_handler(:cancel,    method(:on_personal_cancel))
    @command_window.set_handler(:cancel,    method(:return_scene))
  end

  def command_item; @command_window.hide; @category_window.show.activate; end
  def command_load; SceneManager.call(Scene_Load); end
  def command_game_end; SceneManager.call(Scene_End); end
	def on_personal_cancel; return_scene; end

  def create_gold_window
    @gold_window = Window_Gold.new
    @gold_window.x = 0
    @gold_window.y = 368
    @gold_window.width = 200
  end

  def create_actor_window
    @actor_window = Window_MenuActor.new
    @actor_window.set_handler(:ok,     method(:on_actor_ok))
    @actor_window.set_handler(:cancel, method(:on_actor_cancel))
  end

  def item; @item_window.item; end
  def user; $game_party.movable_members.max_by {|member| member.pha }; end
  def cursor_left?; @item_window.index % 2 == 0; end

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

  def on_actor_ok; (item_usable?) ? use_item : Sound.play_buzzer; end
  def on_actor_cancel; hide_sub_window(@actor_window); end

  def determine_item
    if item.for_friend?
      show_sub_window(@actor_window)
      @actor_window.select_for_item(item)
    else
      use_item
      activate_item_window
    end
  end

  def activate_item_window; @item_window.refresh; @item_window.activate; end

  def item_target_actors
    if !item.for_friend?
      []
    elsif item.for_all?
      $game_party.members
    else
      [$game_party.members[@actor_window.index]]
    end
  end

  def item_usable?; user.usable?(item) && item_effects_valid?; end

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

  def check_common_event; SceneManager.goto(Scene_Map) if $game_temp.common_event_reserved?; end

  def create_help_window
    @help_window = Window_NewHelp.new
    @help_window.z = @actor_window.z - 1
    @help_window.x = 200
    @help_window.y = 368
  end

  def create_category_window
    @category_window = Window_ItemCategory.new
    @category_window.viewport = @viewport
    @category_window.help_window = @help_window
    @category_window.y = 0
    @category_window.set_handler(:ok,     method(:on_category_ok))
    @category_window.set_handler(:cancel, method(:on_category_cancel))
  end

  def on_category_ok; @item_window.activate; @item_window.select_last; end

  def on_category_cancel; @category_window.hide.unselect; @command_window.show.activate; end

  def create_item_window
    @item_window = Window_ItemList.new(0, 48, Graphics.width, Graphics.height - 96)
    @item_window.viewport = @viewport
    @item_window.help_window = @help_window
    @item_window.set_handler(:ok,     method(:on_item_ok))
    @item_window.set_handler(:cancel, method(:on_item_cancel))
    @category_window.item_window = @item_window
  end

  def on_item_ok; $game_party.last_item.object = item; determine_item; end
  def on_item_cancel; @item_window.unselect; @category_window.activate; end
  def play_se_for_item; Sound.play_use_item; end
  def use_item; super; @item_window.redraw_current_item; end
  def next_actor; @actor = $game_party.menu_actor_next; on_actor_change; end
  def prev_actor; @actor = $game_party.menu_actor_prev; on_actor_change; end
  def on_actor_change; end
  def terminate; super; dispose_background; end
  def dispose_background; @bgs.dispose; end
end
