import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import "./services/environmentService";
import { indexRouter } from "./routes/index";

export const app = express();

app.use(logger('dev'));

// allow cross origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use("*", indexRouter);

// catch 404 and forward to error handl
app.use(function(req, res, next) {
  const err: any = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});
