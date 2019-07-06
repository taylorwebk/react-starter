import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import DeleteIcon from '@material-ui/icons/Delete'

const PurchasedProductList = ({ products }) => (
  <div style={{ minWidth: 450 }}>
    <Typography variant="h6">PRODUCTOS COMPRADOS</Typography>
    <Card>
      <List>
        <ListItem>
          <ListItemText
            primary="NOMBRE:"
          />
          <ListItemText
            primary="CANTIDAD:"
          />
          <ListItemText
            primary="SUBTOTAL:"
          />
        </ListItem>
        {
          products.map((product, index) => (
            // eslint-disable-next-line
            <ListItem key={index}>
              <ListItemText
                primary={product.name}
              />
              <ListItemText
                primary={product.cant}
              />
              <ListItemText
                primary={product.price * product.cant}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => console.log('ELIMINAR', index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </Card>
  </div>
)
export default PurchasedProductList
