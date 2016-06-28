interface Log {
  year: number;
  message: string;
  categoryImage: string;
}

function log(log:Log):string {
  return `<span class='log'><strong>${log.year} AC</strong>: <img src="img/${log.categoryImage}.png"> ${log.message}</span>`;
}

export = log;
