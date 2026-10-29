local titulos = { practica = "PRÁCTICA", idea = "IDEA CLAVE", ojo = "PARA EL EXAMEN / OJO" }
function Div(el)
  for _, c in ipairs(el.classes) do
    if titulos[c] then
      local cab = pandoc.Para({ pandoc.Strong({ pandoc.Str(titulos[c]) }) })
      local out = { pandoc.HorizontalRule(), cab }
      for _, b in ipairs(el.content) do table.insert(out, b) end
      table.insert(out, pandoc.HorizontalRule())
      return out
    end
  end
  return el
end
