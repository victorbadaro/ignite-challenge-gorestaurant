import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import api from '../../services/api';
import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

export function Dashboard() {
    const [foods, setFoods] = useState([]);
    const [editingFood, setEditingFood] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        async function getFoods() {
            const response = await api.get('/foods');

            setFoods(response.data);
        }

        getFoods();
    }, []);

    async function handleAddFood(food) {
        try {
            const response = await api.post('/foods', { ...food, available: true });

            setFoods([ ...foods, response.data ]);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleUpdateFood(food) {
        try {
            const response = await api.put(`/foods/${editingFood.id}`, { ...editingFood, ...food });
            const updatedFood = response.data;
            const updatedFoods = foods.map(food => food.id !== updatedFood.id ? food : updatedFood);

            setFoods(updatedFoods);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDeleteFood(id) {
        await api.delete(`/foods/${id}`);
        const filteredFoods = foods.map(food => food.id !== id);

        setFoods(filteredFoods);
    }

    function handleToggleOpenCloseModal() {
        setIsModalOpen(!isModalOpen);
    }

    function handleToggleEditModal() {
        setIsEditModalOpen(!isEditModalOpen);
    }

    function handleEditFood(food) {
        setEditingFood(food);
        setIsEditModalOpen(true);
    }

    return (
        <>
            <Header openModal={handleToggleOpenCloseModal} />
            <ModalAddFood
            isOpen={isModalOpen}
            setIsOpen={handleToggleOpenCloseModal}
            handleAddFood={handleAddFood}
            />
            <ModalEditFood
            isOpen={isEditModalOpen}
            setIsOpen={handleToggleEditModal}
            editingFood={editingFood}
            handleUpdateFood={handleUpdateFood}
            />

            <FoodsContainer data-testid="foods-list">
            {foods &&
                foods.map(food => (
                <Food
                    key={food.id}
                    food={food}
                    handleDelete={handleDeleteFood}
                    handleEditFood={handleEditFood}
                />
                ))}
            </FoodsContainer>
        </>
    );
}