import AuthenticatedLayout from '../../layouts/AuthenticatedLayout';

import "../../public/css/pages/points/AllPointsPage.scss";

 function AllPointsPage() {
  return (
    <AuthenticatedLayout>
        <div>Todos los puntos</div>
    </AuthenticatedLayout>
  )
}

export default AllPointsPage;
