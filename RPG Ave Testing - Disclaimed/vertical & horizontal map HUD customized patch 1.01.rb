#=======================================================================
#
# Michael Customized Map HUD. Patch V. 1.01 for kakekater
#
#=======================================================================

#=======================================================================
# How to use: This is a patch, you need to main script to use this
#             Place it under the "Michael Customized Map HUD"
#             Read Until the stop command
#=======================================================================



module Custom_HUD

  #To switch invisibility for all bars, the command was there on
  #the core script
  #The command was a script call => Scripts: Custom_HUD::switch

  #To switch inivisibility for any bar, the command would be the 
  #following:
  
  #Script call:
  # For full hp bar   => Scripts: Custom_HUD::hp_f_switch
  # For empt hp bar   => Scripts: Custom_HUD::hp_e_switch
  # For full mp bar   => Scripts: Custom_HUD::mp_f_switch
  # For empt mp bar   => Scripts: Custom_HUD::mp_e_switch
  # For hp bar pair   => Scripts: Custom_HUD::hp_switch
  # For mp bar pair   => Scripts: Custom_HUD::mp_switch
  # For full bar pair => Scripts: Custom_HUD::full_switch
  # For empt bar pair => Scripts: Custom_HUD::empt_switch

  def self.hp_f_switch; @hp_f_bg.visible = !@hp_f_bg.visible; end
  def self.hp_e_switch; @hp_e_bg.visible = !@hp_e_bg.visible; end
  def self.mp_f_switch; @mp_f_bg.visible = !@mp_f_bg.visible; end
  def self.mp_e_switch; @mp_e_bg.visible = !@mp_e_bg.visible; end
  def self.hp_switch; @hp_f_bg.visible = !@hp_f_bg.visible; @hp_e_bg.visible = !@hp_e_bg.visible; end
  def self.mp_switch; @mp_f_bg.visible = !@mp_f_bg.visible; @mp_e_bg.visible = !@mp_e_bg.visible; end
  def self.full_switch; @hp_f_bg.visible = !@hp_f_bg.visible; @mp_f_bg.visible = !@mp_f_bg.visible; end
  def self.empt_switch; @hp_e_bg.visible = !@hp_e_bg.visible; @mp_e_bg.visible = !@mp_e_bg.visible; end

  #This is how you can change each of the bar depth/order/z

  #Script call:
  # For full hp bar   => Scripts: Custom_HUD::hp_f_z(insert_number_here)
  # For empt hp bar   => Scripts: Custom_HUD::hp_e_z(insert_number_here)
  # For full mp bar   => Scripts: Custom_HUD::mp_f_z(insert_number_here)
  # For empt mp bar   => Scripts: Custom_HUD::mp_e_z(insert_number_here)
  # For hp bar pair   => Scripts: Custom_HUD::hp_z(insert_number_here)
  # For mp bar pair   => Scripts: Custom_HUD::mp_z(insert_number_here)
  # For full bar pair => Scripts: Custom_HUD::full_z(insert_number_here)
  # For empt bar pair => Scripts: Custom_HUD::empt_z(insert_number_here)

  # For example: Custom_HUD::hp_f_z(200) would set the hp full bar to
  #                                      be at the 200 position (the 
  #                                      larger the position, the higher 
  #                                      the display => 200 will be 
  #                                      placed above 199)

  def self.hp_f_z(num); @hp_f_bg.z = num; end
  def self.hp_e_z(num); @hp_e_bg.z = num; end
  def self.mp_f_z(num); @mp_f_bg.z = num; end
  def self.mp_e_z(num); @mp_e_bg.z = num; end
  def self.hp_z(num); @hp_f_bg.z = @hp_e_bg.z = num; end
  def self.mp_z(num); @mp_f_bg.z = @mp_e_bg.z = num; end
  def self.full_z(num); @hp_f_bg.z = @mp_f_bg.z = num; end
  def self.empt_z(num); @hp_e_bg.z = @mp_e_bg.z = num; end

end
