import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => createStyles({
  mainCont: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

export default useStyles
