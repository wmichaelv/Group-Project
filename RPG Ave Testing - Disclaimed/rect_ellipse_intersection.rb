#RPG Maker VX Ace

module Intersect

  def self.rect_ellipse(cx,cy,rx, ry, rect)
    "origin = (cx, cy)"
    "rx, ry = radius of perspective-axis"
    
    "ellipse equation => (x-cx/rx)^2 + (y-cy/ry)^2 = 1"
    
    "1 - (cx/rx)^2 = (cy/ry)^2"
    
    "(1 - (cx/rx)^2)^.5 = cy/ry"
    
    "cy = ry * (1 - (cx/rx)^2)^.5"
    
    cx_f = cx.to_f
    
    return ((rect.x + rect.width).between?(cx - rx, cx + rx) ||
           ((rect.y + rect.height).between?(get_uy(rect.x + rect.width, cx_f, cy,rx, ry), 
                                            get_ly(rect.x + rect.width, cx_f, cy, rx, ry)) ||
            (rect.y - rect.height).between?(get_uy(rect.x + rect.width, cx_f, cy,rx, ry), 
                                            get_ly(rect.x + rect.width, cx_f, cy, rx, ry)))) ||
           ((rect.x - rect.width).between?(cx - rx, cx + rx) ||                                 
           ((rect.y + rect.height).between?(get_uy(rect.x - rect.width, cx_f, cy,rx, ry), 
                                            get_ly(rect.x - rect.width, cx_f, cy, rx, ry)) ||
            (rect.y - rect.height).between?(get_uy(rect.x - rect.width, cx_f, cy,rx, ry), 
                                            get_ly(rect.x - rect.width, cx_f, cy, rx, ry))));
    
    
  end
  "f(x) upper divission"
  def self.get_uy(x, cx_f,cy,rx, ry)
    return (ry * Math.sqrt((1 - (x - cx_f) / rx * (x - cx_f) / rx).abs.to_i).to_i) + cy
  end
  
  "f(x) lower divission"
  def self.get_ly(x, cx_f, cy, rx, ry)
    return (-ry * Math.sqrt((1 - (x - cx_f)/rx * (x - cx_f)/rx).abs.to_i).to_i) + cy
  end
  
end