import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => createStyles({
  cont: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    marginBottom: 25
  },
  cardCont: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  div: {
    display: 'flex'
  },
  input: {
    flexGrow: 1,
    marginRight: 25
  },
  button: {
    flexGrow: 1
  },
  imgCont: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}))

export default useStyles
