import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => createStyles({
  cardCont: {
    padding: 15,
    minWidth: 350
  },
  contentCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
}))

export default useStyles
