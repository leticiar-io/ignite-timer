import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

const newCycleValidationShema = zod.object({
  task: zod.string().min(1, 'Enter a task'),
  minutesAmount: zod
    .number()
    .min(5, 'The cycle must be a minimum of 5 minutes')
    .max(60, 'The cycle must be a maximum of 60 minutes'),
})

export function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleValidationShema),
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  console.log(formState.errors)

  const task = watch('task') // controlled component
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="">I will work on</label>
          <TaskInput
            id="task"
            list="task-sugestions"
            placeholder="Name your project"
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
