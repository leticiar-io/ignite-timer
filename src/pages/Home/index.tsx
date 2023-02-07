import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">I will work on</label>
          <TaskInput
            id="task"
            list="task-sugestions"
            placeholder="Name your project"
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

        <StartCountdownButton type="submit" disabled>
          <Play />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
