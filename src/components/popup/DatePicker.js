import { Stack, TextField } from '@mui/material'
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab'
import { useState } from 'react'

export const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label='Data de nascimento'
        value={selectedDate}
        onChange={newValue => {
          setSelectedDate(newValue)
        }}
        renderInput={params => <TextField {...params} />}
      />
    </Stack>
  )
}