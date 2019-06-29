import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => createStyles({
  cardCont: {
    marginTop: 15,
    padding: 15
  },
  contentCont: {
    minWidth: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  productCont: {
    display: 'flex'
  },
  datos: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  botones: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  priceCont: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 15px'
  },
  price: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontSize: 25,
    color: '#25cc20'
  }
}))

export default useStyles
