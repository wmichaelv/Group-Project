#==============================================================================
#
# Michael Skyrym Alchemy + Extended
# Last Updated: 2014.02.08
# V 0.11
# Requirement: RPG Maker VX Ace
#             -Knowledge of 'how to use script and notetag'
#
#==============================================================================
# Description
#==============================================================================
# This script is to do alchemy like in Skyrym GUI but with more dynamic settings
#
#==============================================================================
# Compatibility
#==============================================================================
# - RPG::BaseItem DataManager are the only overloaded class, so compatibility
#   is pretty high.
#
#==============================================================================
# Installation
#==============================================================================
# - Place anywhere under material section but above main
#
#==============================================================================
# How to Use:
# - Call Scene by using Script Call
# Script: SceneManager.call(Scene_Alchemy)
#
# - use notetag to specify ingredient and product
#   Notetag for ingredient =>   <Ingr:product_name>
#                       For ex: <Ingr:bazooka>
#                               This item is an ingredient to make bazooka
#                          =>   <Type:iron>
#                               This item IngredientType is iron
#
#   Notetag for product    =>   <Prod:product_name(IT,IA)>
#                               IT = # of Ingredient Type
#                               IA = # of Ingredient Amount
#                       For ex: <Prod:bazooka(2,5)>
#                               bazooka requires 2 ingredient types and 5 each
#                               bazooka requires 2 types total
#                       For ex: <Prod:bazooka(3,1)>
#                               bazooka requires 3 ingredient types and 1 each
#                               bazooka requires 3 types total
#                       For ex: <Prod:bazooka>
#                               bazooka requires 0 ingredient types and 0 each
#                               bazooka requires 0 types total
#
#                          =>   <Reqr:IngredientType(IT,IA)>
#                       For ex: <Product:bazooka>
#                               <Reqr:Iron(2, 5)>
#                               bazooka requires 0 ingredient types and 0 each
#                               bazooka requires 2 irons (IngredientType) and 5 each
#                               bazooka requires 2 types total
#                       For ex: <Product:bazooka(1,2)>
#                               <Reqr:iron(1,1)>
#                               bazooka requires 1 ingredient types and 2 each
#                               bazooka requires 1 irons (IngredientType) and 1 each        
#                               bazooka requires 2 types total
#                       For ex: <Product:bazooka(1,2)
#                               <Reqr:iron(1,1)>
#                               <Reqr:mineral(2,1)>
#                               bazooka requires 1 ingredient types and 2 each
#                               bazooka requires 1 irons (IngredientType) and 1 each
#                               bazooka requires 2 minerals (IngredientType) and 1 each        
#                               bazooka requires 4 types total
#
#  REMINDER REMINDER REMINDER REMINDER REMINDER REMINDER
#  - notetag is case sensitive
#  - check spelling before reporting error
#
#
# #=================================== End ===================================#
#
#  Have Fun!
#
#==============================================================================

#==============================================================================
# Bio
#==============================================================================
#
# 2014.02.09 - V 0.11  Game_Alchemy is made
# 2014.02.08 - V 0.1   Script is initailized
#
#==============================================================================


#==============================================================================
# RPG::BaseItem
#==============================================================================

class RPG::BaseItem

  attr_accessor :cmake
  attr_accessor :prod
  attr_accessor :requiredType
  attr_accessor :requiredAmmo
  attr_accessor :ingr

  alias RPG_BaseItem_Initialize initialize
  def initialize; RPG_BaseItem_Initialize; @cmake = false end

  def checkCanMake?
    setRequirement if !@requirementSet
    updatePartyHas
    
  end

  def setRequirement

    @requiredType = Hash.new {|h,k| h[k]=[]}
    @requiredAmmo = Hash.new {|h,k| h[k]=[]}
    @prod = self.note.scan(/(?<=<Reqr:).*?(?=[(])/)
    @ingr = self.note.scan(/(?<=<Type:).*?(?=[>])/)
    @prod << self.note[/(?<=<Prod:).*?(?=[(])/]
    @prod << self.note[/(?<=<Ingr:).*?(?=[>])/]
    @requiredType[@prod] << self.note[/(?<=<Prod:).*?(?=[>])/][/(?<=[(]).*?(?=[,])/].to_i 
    @requiredAmmo[@prod] << self.note[/(?<=<Prod:).*?(?=[>])/][/(?<=[,]).*?(?=[)])/].to_i
    
    @requirementSet = true
    
  end

  def updatePartyHas


  end

end

#==============================================================================
# DataManager
#==============================================================================

module DataManager

  alias michael_DataManager_create_game_objects create_game_objects
  def self.create_game_objects

    michael_DataManager_create_game_objects
    $game_alchemy = Game_Alchemy.new

  end

end

#==============================================================================
# Game_Alchemy
#==============================================================================

class Game_Alchemy

  attr_accessor :product

  def initialize

    @product = []
    $data_items.each do |item| @product << $data_items[item] if $data_items[item].note.match(/<Prod/) end
    $data_weapons.each do |item| @product << $data_weapons[item] if $data_weapons[item].note.match(/<Prod/) end
    $data_armors.each do |item| @product << $data_armors[item] if $data_armors[item].note.match(/<Prod/) end
    @product.each do |item| item.checkCanMake? end
  end

end


#==============================================================================
# Scene_Alchemy
#==============================================================================

class Scene_Alchemy < Scene_MenuBase
  
  def start

    super
    create_product_window
    create_ingredient_window
    create_confirm_window

  end
  
  def create_product_window

    @product_window = Window_Product.new
    @product_window.set_handler(:product,  method(:selectIngredient))
    @product_window.set_handler(:cancel,   method(:return_scene))
    @product_window.help = @help_window
    @product_window.activate

  end
  
  def create_ingredient_window

    @ingredient_window = Window_Ingredient.new
    @ingredient_window.set_handler(:ingredient,  method(:ingredientSelect))
    @ingredient_window.set_handler(:cancel,      method(:returnProduct))
    @product_window.help = @help_window
    @product_window.ingredient = @ingredient_window

  end

  def create_confirm_window

    @confirm_window = Window_Confirm.new(172, 208)
    @confirm_window.width = 200
    @confirm_window.set_handler(:vvConfirm,  method(:confirm))
    @confirm_window.set_handler(:Cancel,     method(:cancel))
    @confirm_window.set_handler(:cancel,     method(:cancel))
    @confirm_window.z = 200
    @confirm_window.deactivate
    @confirm_window.hide
    @confirm_window.close

  end

  def cannot_select

    Sound.play_buzzer
    b = Bitmap.new(340,60)
    b.draw_text(0, 20,340, 20, "You don't have enough ingredient.")
    w = Window_Message.new
    w.contents = b
    w.width = 380
    w.height = 100
    w.visible = true
    w.openness = 255
    w.x = 100
    w.y = 180
    w.back_opacity = 255
    w.opacity = 255
    w.update
    Graphics.wait(180)
    b.dispose
    w.dispose

  end

end

#==============================================================================
# Window_Product
#==============================================================================

class Window_Product < Window_Command

  attr_accessor :ingredient

  def make_command_list
    $game_alchemy.product.each do |i| add_command(i.name, :productList) end
  end

  def window_width; 160 end
  def window_height; 508 end
  def item; $game_alchemy.product && index >= 0 ? $game_alchemy.product[index] : nil end
  def select_last; select($game_alchemy.product.index($game_party.last_item.object) || 0) end
  
  def draw_item(index)

    rect = item_rect(index)
    rect.x += 4
    rect.width -= 8
    icon_index = $game_alchemy.product[index].icon_index
    self.contents.clear_rect(rect)
    if !icon_index.nil?
      rect.x -= 4
      draw_icon(icon_index, rect.x, rect.y, $game_alchemy.product[index].cmake)
      rect.x += 26
      rect.width -= 20
    end
    self.contents.clear_rect(rect)
    self.contents.font.color = normal_color
    self.contents.font.color.alpha = enabled ? 255 : 128
    self.contents.draw_text(rect, $game_alchemy.product[index].name)
  end

  def update_help; @help_window.set_item(item) end
  def refresh; super; checkEnable end
  def checkEnable; $game_alchemy.product.each do |i| i.cmake = i.checkCanMake end
end
#==============================================================================
# Window_Ingredient
#==============================================================================
=begin
class Window_Product < Window_Command

  attr_accessor :ingredient

  def initialize(x, y)

  def make_command_list
    $game_alchemy.product.each do |i| add_command(i.name, :productList) end
  end

  def window_width; 160 end
  def window_height; 508 end
  def item; @product && index >= 0 ? @product[index] : nil end
  def select_last; select(@product.index($game_party.last_item.object) || 0) end
  
  def draw_item(index)
    rect = item_rect(index)
    rect.x += 4
    rect.width -= 8
    icon_index = @product[index].icon_index
    self.contents.clear_rect(rect)
    if !icon_index.nil?
      rect.x -= 4
      draw_icon(icon_index, rect.x, rect.y, @product[index].cmake)
      rect.x += 26
      rect.width -= 20
    end
    self.contents.clear_rect(rect)
    self.contents.font.color = normal_color
    self.contents.font.color.alpha = enabled ? 255 : 128
    self.contents.draw_text(rect, @product[index].name)
  end
  def update_help; @help_window.set_item(item) end
  def refresh; super; checkEnable end
  def checkEnable
    @product.each do |i|

end
=end
#==============================================================================
# Window_Confirm
#==============================================================================

class Window_Confirm < Window_Command

  def make_command_list; add_command('Confirm', :Confirm); add_command('Cancel',  :Cancel); end

end