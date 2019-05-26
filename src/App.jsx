import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import withTheme from './utils/withTheme'

const styles = {
  cont: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    padding: 25
  }
}

const App = () => (
  <div style={styles.cont}>
    <Paper style={styles.paper}>
      <Typography variant="h3">
        HOLA MUNDO 
      </Typography>
    </Paper>
  </div>
)

export default withTheme(App)
