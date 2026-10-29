function Div(el)
  local envs = { practica = "practica", idea = "idea", ojo = "ojo" }
  for _, c in ipairs(el.classes) do
    if envs[c] then
      local open  = pandoc.RawBlock("latex", "\\begin{" .. envs[c] .. "}")
      local close = pandoc.RawBlock("latex", "\\end{" .. envs[c] .. "}")
      local out = { open }
      for _, b in ipairs(el.content) do table.insert(out, b) end
      table.insert(out, close)
      return out
    end
  end
  return el
end
