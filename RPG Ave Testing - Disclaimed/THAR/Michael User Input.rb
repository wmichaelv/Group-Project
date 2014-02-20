module User

  State = Win32API.new('user32','GetKeyState',['L'],'L')
  
  def self.dir8
    
    if (State.call(0x57) & 0x80 != 0) && (State.call(0x44) & 0x80 != 0)
      return 9
    #W & S keys
    elsif (State.call(0x57) & 0x80 != 0) && (State.call(0x53) & 0x80 == 0)
      return 8
    elsif (State.call(0x57) & 0x80 != 0) && (State.call(0x41) & 0x80 != 0)
      return 7
    elsif (State.call(0x44) & 0x80 != 0) && (State.call(0x41) & 0x80 == 0)
      return 6
    #A & D keys
    elsif (State.call(0x41) & 0x80 != 0) && (State.call(0x44) & 0x80 == 0)
      return 4
    elsif (State.call(0x53) & 0x80 != 0) && (State.call(0x44) & 0x80 != 0)
      return 3
    elsif (State.call(0x53) & 0x80 != 0) && (State.call(0x57) & 0x80 == 0)
      return 2
    elsif (State.call(0x53) & 0x80 != 0) && (State.call(0x41) & 0x80 != 0)
      return 1
    else
      return 0
    end
  end
end