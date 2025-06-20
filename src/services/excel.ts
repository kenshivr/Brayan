// import ExcelJS, { Workbook, Worksheet } from 'exceljs';

// class ExcelService {
//   name: string;
//   data: any[];
//   columns: any[];
//   workbook: Workbook;
//   worksheet: Worksheet;

//   constructor() {
//     this.name = 'excelfile';
//     this.data = [];
//     this.columns = [];
//     this.workbook = new ExcelJS.Workbook();
//     this.worksheet = this.workbook.addWorksheet('Sheet1');
//   }

//   public setName(report: string): this {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const day = String(now.getDate()).padStart(2, '0');
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');

//     const date = `${year}-${month}-${day}`;
//     const hour = `${hours}${minutes}${seconds}`;

//     const name = `${report} - ${date} ${hour}`;

//     this.name = name;

//     return this;
//   }

//   public define(data: any[], columns: any[]): this {
//     this.data = data;
//     this.columns = columns;

//     this.worksheet.columns = this.columns;

//     this.data.forEach((row) => {
//       this.worksheet.addRow(row);
//     });

//     return this;
//   }

//   public styleRange(
//     wh: Worksheet,
//     range: [number, number],
//     width: number,
//     fillColor?: string
//   ): void {
//     for (let i = 0; i < range[1]; ++i) {
//       const index = range[0] + i;
//       const column = wh.getColumn(index);

//       column.width = width;

//       if (!fillColor) {
//         continue;
//       }

//       let cell = wh.getColumn(index);

//       cell.fill = {
//         type: 'pattern',
//         pattern: 'solid',
//         fgColor: { argb: fillColor }
//       };
//     }
//   }

//   public download(): void {
//     this.workbook.xlsx.writeBuffer().then((buffer) => {
//       const blob = new Blob([buffer], {
//         type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//       });
//       const url = URL.createObjectURL(blob);
//       const anchor = document.createElement('a');
//       anchor.href = url;
//       anchor.download = this.name + '.xlsx';
//       anchor.click();
//     });
//   }
// }

// export default ExcelService;