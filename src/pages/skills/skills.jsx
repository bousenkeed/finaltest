import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import s from './skills.module.css'

function Skills() {
  return (
    <div className={s.main_container}>
      <div className={s.cards}>
        <div className={s.card}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image='https://i.pinimg.com/564x/cd/e7/0f/cde70fa675d3d4a3d4f7954617255450.jpg'
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={s.card}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image='https://i.pinimg.com/564x/da/32/f7/da32f7eb7993946c730693ac9905926e.jpg'
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CSS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={s.card}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image='https://i.pinimg.com/564x/2a/e1/1a/2ae11aed51c7ebe720d290feeb820be9.jpg'
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JavaScript
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={s.card}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image='https://i.pinimg.com/564x/e2/53/bb/e253bb9cc9c389da3077e1689c9a1de1.jpg'
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Skills;

