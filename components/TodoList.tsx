"use client"
import { cn } from "@/lib/utils"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { ScrollArea } from "./ui/scroll-area"
import { Dispatch, SetStateAction, useState } from "react"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { format } from "date-fns"
import { Button } from "./ui/button"
import { CalendarIcon } from "lucide-react"

const todoLists = [
  { id: 1, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 2, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 3, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 4, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 5, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 6, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 7, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 8, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 9, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
  { id: 10, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur!" },
]

type StateItem = [boolean, Dispatch<SetStateAction<boolean>>]

const TodoList = () => {  

  const checkStateList: Array<StateItem> = []
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)

  return (
    <div className="gap-2">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => { setDate(date); setOpen(false) }}
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto gap-10">
        <div className="flex flex-col gap-4">
          {todoLists.map(todo => {
            const [checked, setChecked] = useState(false)
            checkStateList.push([checked, setChecked])
            
            return <Card className="px-4" key={todo.id}>
              <div className="flex items-center gap-4">
                <Checkbox id={`item-${todo.id}`} onCheckedChange={() => setChecked(true)} />
                <label htmlFor={`item-${todo.id}`} className={cn("text-sm  text-muted-foreground", checked && "text-white")}>
                  {todo.content}
                </label>
              </div>
            </Card>
          })}
          
        </div>
      </ScrollArea>
    </div>

  )
}

export default TodoList