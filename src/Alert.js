import React, { useEffect } from 'react'
import { useSnackbar } from 'notistack';
import { useSelector , useDispatch } from 'react-redux';
import { resetalert } from './redux/action/alert.action';

export default function Alert() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()


  useEffect(() => {
    if (alert.text !== '') {
      enqueueSnackbar(alert.text, {
        variant:alert.color,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      });
      setTimeout(dispatch(resetalert()) ,2000)
    }

  }, [alert.text])


  return (
    <div>

    </div>
  )
}
