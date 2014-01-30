#RPG Maker VX Ace

module Intersect

  def self.rect_ellipse(cx,cy,rx, ry, rect)
    "origin = (cx, cy)"
    "rx, ry = radius of perspective-axis"
    
    "ellipse equation => (x-cx/rx)^2 + (y-cy/ry)^2 = 1"
    
    "1 - ((x -cx)/rx)^2 = (cy/ry)^2"
    
    "(1 - ((x- cx)/rx)^2)^.5 = cy/ry"
    
    "y = ry * (1 - (cx/rx)^2)^.5 + cy"
    
    cx_f = cx.to_f
      
    if rect.x + rect.width > cx + rx ||
       rect.x - rect.width < cx - rx ||
       rect.y + rect.height > cy + ry ||
       rect.y - rect.height < cy - ry
       
       return false
      
    else
      
      return ((rect.y + rect.height).between?(get_ly(rect.x + rect.width, cx_f, cy,rx, ry), 
                                              get_uy(rect.x + rect.width, cx_f, cy, rx, ry)) ||
              (rect.y - rect.height).between?(get_ly(rect.x + rect.width, cx_f, cy,rx, ry), 
                                              get_uy(rect.x + rect.width, cx_f, cy, rx, ry))) ||                                
             ((rect.y + rect.height).between?(get_ly(rect.x - rect.width, cx_f, cy,rx, ry), 
                                              get_uy(rect.x - rect.width, cx_f, cy, rx, ry)) ||
              (rect.y - rect.height).between?(get_ly(rect.x - rect.width, cx_f, cy,rx, ry), 
                                              get_uy(rect.x - rect.width, cx_f, cy, rx, ry)));
                                              
    end
    
  end
  "f(x) upper divission"
  def self.get_uy(x, cx_f,cy,rx, ry)
    return ry * 1 - Math.sqrt(((x - cx_f) / rx * (x - cx_f) / rx).abs) + cy
  end
  
  "f(x) lower divission"
  def self.get_ly(x, cx_f, cy, rx, ry)
    return -ry * 1 - Math.sqrt(((x - cx_f) / rx * (x - cx_f) / rx).abs) + cy
  end
  
end