function log(item:string, year:number, log:HTMLElement, cb:Function) {
  return function() {
    log.textContent += `<strong>${year} AC</strong>: ${item}\n`;
    return cb();
  }
}

export = log;
