#==============================================================================
# Michael Basic 8D
#==============================================================================
class Game_Map
  def x_with_direction(x, d)
    x + ((d == 9 || d == 6 || d == 3) ? 1 : 
         ((d == 7 || d == 4 || d == 1) ? -1 : 0)) end
  def y_with_direction(y, d)
    y + ((d == 1 || d == 2 || d == 3) ? 1 : 
         ((d == 7 || d == 8 || d == 9) ? -1 : 0)) end
  def round_x_with_direction(x, d)
    round_x(x + ((d == 9 || d == 6 || d == 3) ? 1 : 
                 ((d == 7 || d == 4 || d == 1) ? -1 : 0))) end
  def round_y_with_direction(y, d)
    round_y(y + ((d == 1 || d == 2 || d == 3) ? 1 : 
                 ((d == 7 || d == 8 || d == 9) ? -1 : 0))) end
end
class Game_Character < Game_CharacterBase
  def turn_right_90
    case @direction
    when 1;  set_direction(7);when 2;  set_direction(4)
    when 3;  set_direction(1);when 4;  set_direction(8)
    when 6;  set_direction(2);when 7;  set_direction(9)
    when 8;  set_direction(6);when 9;  set_direction(3)
    end
  end
  def turn_left_90
    case @direction
    when 1;  set_direction(3);when 2;  set_direction(6)
    when 3;  set_direction(9);when 4;  set_direction(2)
    when 6;  set_direction(8);when 7;  set_direction(1)
    when 8;  set_direction(4);when 9;  set_direction(7)
    end
  end
end
class Game_Player < Game_Character
  def move_by_input
    return if !movable? || $game_map.interpreter.running?
    case Input.dir8
    when 2,4,6,8;move_straight(Input.dir8)
    when 1;move_diagonal(4, 2);when 3;move_diagonal(6, 2)
    when 7;move_diagonal(4, 8);when 9;move_diagonal(6, 8)
    else;end
  end
end