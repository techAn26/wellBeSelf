import { atom, selector } from 'recoil'

export type Task = {
  id: string
  title: string
  description: string
  type: 'CONTINUOUS' | 'ONE_TIME'
  status: 'TODO' | 'IN_PROGRESS' | 'DONE'
  startDate: string
  endDate?: string
}

export type TaskFilter = {
  type: 'ALL' | 'CONTINUOUS' | 'ONE_TIME'
  status: 'ALL' | 'TODO' | 'IN_PROGRESS' | 'DONE'
}

export const taskListState = atom<Task[]>({
  key: 'taskListState',
  default: []
})

export const taskFilterState = atom<TaskFilter>({
  key: 'taskFilterState',
  default: {
    type: 'ALL',
    status: 'ALL'
  }
})

export const filteredTaskListState = selector({
  key: 'filteredTaskListState',
  get: ({ get }) => {
    const tasks = get(taskListState)
    const filter = get(taskFilterState)

    return tasks.filter((task) => {
      const matchesType = filter.type === 'ALL' || task.type === filter.type
      const matchesStatus = filter.status === 'ALL' || task.status === filter.status
      return matchesType && matchesStatus
    })
  }
})