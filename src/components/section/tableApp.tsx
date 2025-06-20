// import { Toast } from 'primereact/toast';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { Toolbar } from 'primereact/toolbar';
// // import ExcelService from '@src/services/excel';
// import { UIMessages } from '@src/models/messages';
// import { FilterMatchMode } from 'primereact/api';
// import React, { useState, useEffect, useRef } from 'react';
// import { DataTable, type DataTableFilterMeta } from 'primereact/datatable';
// import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
// import EmployeesModify from '@src/pages/recursos-humanos/empleados/modify';
// import { empleadosExcelVista, empleadosExcelCompleto } from '@src/models/files';

// const MODE = {
//   MODIFY: 0,
//   CREATE: 1
// };

// export default function Employees(): JSX.Element {
//   const toast = useRef<Toast>(null);
//   const [item, setItem] = useState<any>({});
//   const [data, setData] = useState<any[]>([]);
//   const [mode, setMode] = useState(MODE.MODIFY);
//   const [selected, setSelected] = useState<any>(null);
//   const [popout, setPopout] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [dataFiltered, setDataFiltered] = useState<any[]>([]);
//   const [filters, setFilters] = useState<DataTableFilterMeta>({
//     idEmpleado: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     nombre: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     apellidos: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     departamento: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     estatus: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     puesto: { value: null, matchMode: FilterMatchMode.CONTAINS }
//   });

//   const show = (params: any): void => {
//     toast.current?.show(params);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await api.get(`/recursos-humanos/v1/empleados`);

//       setData(response.data);
//       setSelected(null);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const employeeModify = () => {
//     setMode(MODE.MODIFY);
//     setPopout(true);
//     setItem(selected);
//   };

//   const employeeCreate = () => {
//     setMode(MODE.CREATE);
//     setPopout(true);
//     setItem({});
//   };

//   const popoutClose = () => {
//     setPopout(false);
//   };

//   const cleanData = (data: any[]): any[] => {

//     const updateData = data.map((item: any) => ({
//       ...item,
//       fechaAlta: item.fechaAlta ? item.fechaAlta.split('T')[0] : '',
//       fechaBaja: item.fechaBaja ? item.fechaBaja.split('T')[0] : '',
//       fechaNacimiento: item.fechaNacimiento ? item.fechaNacimiento.split('T')[0] : '',
//     }))

//     return updateData;
//   };

//   const downloadExcelVista = () => {
//     const name = 'Empleados';

//     const updateData = cleanData(data);
//     const updateDataFiltered = cleanData(dataFiltered);

//     if (dataFiltered.length === 0) {
//       new ExcelService()
//         .setName(name)
//         .define(updateData, empleadosExcelVista)
//         .download();
//     } else {
//       new ExcelService()
//         .setName(name)
//         .define(updateDataFiltered, empleadosExcelVista)
//         .download();
//     }
//   };

//   const downloadExcelCompleto = () => {
//     const name = 'Empleados';

//     const updateData = cleanData(data);

//     new ExcelService()
//       .setName(name)
//       .define(updateData, empleadosExcelCompleto)
//       .download();
//   };

//   const leftToolbarTemplate = () => {
//     return (
//       <div className='flex flex-wrap gap-2'>
//         <Button
//           label='Alta'
//           icon='pi pi-plus'
//           severity='success'
//           size='small'
//           onClick={employeeCreate}
//           outlined
//         />
//         <Button
//           label='Modificar'
//           icon='pi pi-pencil'
//           severity='info'
//           size='small'
//           disabled={!selected}
//           onClick={employeeModify}
//           outlined
//         />
//         <Button
//           label='Eliminar'
//           icon='pi pi-trash'
//           severity='danger'
//           size='small'
//           disabled={!selected}
//           onClick={confirm}
//           outlined
//         />
//       </div>
//     );
//   };

//   const rightToolbarTemplate = () => {
//     return (
//       <div className='flex flex-wrap gap-2'>
//         <Button
//           label='Actualizar'
//           icon='pi pi-replay'
//           severity='success'
//           size='small'
//           disabled={loading}
//           onClick={fetchData}
//           outlined
//         />
//         <Button
//           label='Exportar Vista'
//           icon='pi pi-upload'
//           className='p-button-help'
//           size='small'
//           disabled={loading}
//           onClick={downloadExcelVista}
//           outlined
//         />
//         <Button
//           label='Exportar Completo'
//           icon='pi pi-upload'
//           className='p-button-help'
//           size='small'
//           disabled={loading}
//           onClick={downloadExcelCompleto}
//           outlined
//         />
//       </div>
//     );
//   };

//   const accept = async () => {
//     const { id } = selected;

//     try {
//       await api.delete(`/recursos-humanos/v1/empleado/${id}`);

//       show(UIMessages.recordDeleted);
//       fetchData();
//     } catch (error) {
//       show(UIMessages.connectionError);
//       console.log(error);
//     }
//   };

//   const reject = () => { };

//   const confirm = () => {
//     confirmDialog({
//       ...UIMessages.deleteConfirmDialog,
//       accept,
//       reject
//     });
//   };

//   return (
//     <div className='relative h-[calc(100vh-60px)] w-full'>
//       <Toast ref={toast} position='bottom-right' />

//       <ConfirmDialog />

//       {popout && (
//         <EmployeesModify
//           closeHandler={popoutClose}
//           data={item}
//           fetchDataHandler={fetchData}
//           mode={mode}
//           show={show}
//         />
//       )}

//       <div className='m-auto w-full pt-5'>
//         <Toolbar
//           className='mb-4'
//           start={leftToolbarTemplate}
//           end={rightToolbarTemplate}
//           style={{ padding: 8, margin: '0 important' }}
//         ></Toolbar>

//         <DataTable
//           dataKey='idEmpleado'
//           className='m-2'
//           value={data}
//           metaKeySelection={false}
//           loading={loading}
//           filters={filters}
//           filterDisplay='row'
//           globalFilterMatchMode='contains'
//           scrollHeight='496px'
//           size='normal'
//           scrollable
//           emptyMessage='No hay datos que mostrar'
//           selectionMode='single'
//           selection={selected!}
//           onFilter={(e) => {
//             setFilters(e.filters);
//           }}
//           onValueChange={(data: any) => {
//             setDataFiltered(data);
//           }}
//           onSelectionChange={(e) => {
//             const value = e.value;
//             setSelected(value);
//           }}
//         >
//           <Column
//             field='idEmpleado'
//             header='N. Empleado'
//             filter
//             filterPlaceholder=''
//             style={{ width: '2%', textAlign: 'center' }}
//           ></Column>
//           <Column
//             field='nombre'
//             header='Nombre'
//             filter
//             filterPlaceholder=''
//             style={{ width: '5%' }}
//           ></Column>
//           <Column
//             field='apellidos'
//             header='Apellidos'
//             filter
//             filterPlaceholder=''
//             style={{ width: '5%' }}
//           ></Column>
//           <Column
//             field='departamento'
//             header='Departamento'
//             filter
//             filterPlaceholder=''
//             style={{ width: '5%' }}
//           ></Column>
//           <Column
//             field='estatus'
//             header='Estado'
//             filter
//             style={{ width: '5%' }}
//           ></Column>
//           <Column
//             field='puesto'
//             header='Puesto'
//             filter
//             style={{ width: '5%' }}
//           ></Column>
//         </DataTable>
//       </div>
//     </div>
//   );
// }
