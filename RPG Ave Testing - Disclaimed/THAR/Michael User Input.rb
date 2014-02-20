module User

  State = Win32API.new('user32','GetKeyState',['L'],'L')
  
  def self.moveUP
    State.call(0x57) & 0x80 != 0 && State.call(0x53) & 0x80 == 0
  end

  def self.moveDOWN
    State.call(0x53) & 0x80 != 0 && State.call(0x57) & 0x80 == 0
  end

  def self.moveLEFT
    State.call(0x41) & 0x80 != 0 && State.call(0x44) & 0x80 == 0
  end

  def self.moveRIGHT
    State.call(0x44) & 0x80 != 0 && State.call(0x41) & 0x80 == 0
  end

  def self.dir8
    
    #UP    || 0x57 || W
    #DOWN  || 0x53 || S
    #LEFT  || 0x41 || A 
    #RIGHT || 0x44 || D
    
    if State.call(0x57) & 0x80 != 0
      if State.call(0x53) & 0x80 != 0
        return 0
    	if State.call(0x44) & 0x80 != 0
        return 9
      if State.call(0x41) & 0x80 != 0
      	return 7
      return 8
    elsif State.call(0x44) & 0x80 != 0
    	if State.call(0x41) & 0x80 != 0
    		return 0
    	if State.call(0x57) & 0x80 != 0
    		return 9
    	if State.call(0x53) & 0x80 != 0
    		return 3
    	return 6
    elsif State.call(0x41) & 0x80 != 0
    	if State.call(0x44) & 0x80 != 0
    		return 0
    	if State.call(0x57) & 0x80 != 0
    		return 7
    	if State.call(0x53) & 0x80 != 0
    		return 1
    	return 4
    elsif State.call(0x53) & 0x80 != 0
    	if State.call(0x57) & 0x80 != 0
    		return 0
    	if State.call(0x41) & 0x80 != 0
    		return 1
    	if State.call(0x44) & 0x80 != 0
    		return 3
    	return 2
    else
    	return 0
    end
  
  end
end