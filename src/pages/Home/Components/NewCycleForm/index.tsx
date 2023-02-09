import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../..'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="">I will work on</label>
      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Name your project"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-sugestions">
        <option value="English Study" />
        <option value="UI/UX Study" />
        <option value="ReactJS Study" />
        <option value="Project 1" />
        <option value="Project 2" />
      </datalist>
      <label htmlFor="">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5} // skip 5 to 5
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
